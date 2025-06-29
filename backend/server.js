import dotenv from 'dotenv'
import connectDB from './db/index.db.js'

import express from 'express'

import { app } from './app.js'


dotenv.config()

connectDB()

    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`✅ Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log("❌ MONGO db connection failed !!!", error)
    })