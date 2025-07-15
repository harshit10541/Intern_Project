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

const mp = {};
mp["T1"] = ['a', 'c', 'd', 'e1', 'e2', 'e3' , 'e4'];
mp["T2"] = ['a', 'b', 'c', 'd', 'e1', 'e2', 'e3' , 'e4', 'e5'];
mp["T3"] = ['a', 'b', 'c', 'd', 'e1', 'e2', 'e3' , 'e4', 'e5', 'f'];
mp["l0"] = ['a', 'b', 'c', 'd', 'e1', 'e2', 'e3' , 'e4', 'e5'];
mp["MSME"] = ['m1', 'm2', 'm3'];




app.use('/api/v1/users', userRoutes);
app.use('/api/v1/annexures', annexuresRoutes);
app.use('/api/v1/applications', applicationsRoutes);
app.get('/api/v1/application/:type', (req, res) =>{
    const st = req.params.type;

    res.json(mp[st])
})

// app.get('/', (req, res) =>{
//     res.json("Get all");
// });


export { app }
