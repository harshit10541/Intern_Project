import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorHandler } from "./middleware/errorHandler.js"

const app = express()

//Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(errorHandler);  // middleware

// const port = process.env.PORT || 5000;

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/annexures', annexuresRoutes);
app.use('/api/v1/applications', applicationsRoutes);


//Routes import and all defined in one place and main route in this to make it more modular
import userRoutes from './routes/user.routes.js'
// routes declaration (we use this to use the middleware)

app.use('/api/v1/users', userRoutes)

export { app }
