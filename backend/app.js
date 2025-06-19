import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorHandler } from "./middleware/errorHandler"

const app = express();

//Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json());
app.use(errorHandler);  // middleware

const port = process.env.PORT || 5000;

//Routes
import userRoutes from './routes/user.routes.js'

app.use('/', userRoutes)

// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/annexures', require('./routes/annexures'));
// app.use('/api/applications', require('./routes/applications'));
