import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}/${DB_NAME}`)
        console.log(`\n MONGO DB connected !! DB:HOST ${connectionInstance.connection.host}`)
    }
    catch (error) {
        console.log("MONGODB CONNECTION ERROR: ", error)
        process.exit(1)
    }
}

export default connectDB