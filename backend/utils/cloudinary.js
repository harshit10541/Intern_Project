import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'



const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file is uploaded successfully
        console.log("File uploaded successfully ", response.url)
        fs.unlinkSync(localFilePath)
        return response
    }
    catch (error) {
        // If Cloudinary upload fails, remove the saved temp file
        if (fs.existsSync(localFilePath)) { // Check if file exists before trying to delete
            fs.unlinkSync(localFilePath);
        }
        console.error("Cloudinary upload failed:", error.message);
        return null
    }
}

export { uploadOnCloudinary }