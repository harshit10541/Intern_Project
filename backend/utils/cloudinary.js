import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null

        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file is uploaded successfully
        // console.log("File uploaded successfully ", response.url)
        // fs.unlinkSync(localFilePath)
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