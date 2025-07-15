import dotenv from 'dotenv'
import connectDB from './db/index.db.js'

import { app } from './app.js'
import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


dotenv.config()


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

connectDB()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`✅ Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("❌ MONGO db connection failed !!!", error)
    })