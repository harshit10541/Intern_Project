import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { errorHandler } from "./middleware/errorHandler.js"
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())
// This makes files saved by Multer in './public/temp' accessible via '/public/temp/filename.ext'
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(errorHandler)  // middleware


//Routes import and all defined in one place and main route in this to make it more modular
// routes declaration (we use this to use the middleware)

import userRoutes from './routes/user.routes.js'
import annexuresRoutes from './routes/annexures.routes.js'
import applicationsRoutes from './routes/applications.routes.js'

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/annexures', annexuresRoutes);
app.use('/api/v1/applications', applicationsRoutes);

// app.get('/', (req, res) =>{
//     res.json("Get all");
// });


export { app }
