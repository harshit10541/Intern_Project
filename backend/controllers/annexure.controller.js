import { annexureAModel } from '../models/annexureA.model.js';
import { annexureBModel } from '../models/annexureB.model.js';
import { annexureCModel } from '../models/annexureC.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // For __dirname equivalent
import { v2 as cloudinary } from 'cloudinary'; // Import cloudinary for deletion (ensure it's configured globally or imported)

// Get __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Define the directory for temporary uploads (must match multer config)
// This path should be relative to your project root from where Multer saves files
const uploadDir = path.resolve(__dirname, '../../public/temp');

const models = {
    a: annexureAModel,
    b: annexureBModel,
    c: annexureCModel,
};

// Helper function to handle file uploads to Cloudinary
// This now returns an object with Cloudinary URLs
const handleFileUploads = async (files, type) => {
    const fileData = {};

    if (!files) return fileData;
    console.log(files.panFile)
    // Helper to upload multiple files and return an array of Cloudinary URLs
    const uploadAndMapMultipleFiles = async (fileArray) => {
        if (!fileArray || fileArray.length === 0) return [];
        const uploadedUrls = [];
        for (const file of fileArray) {
            const cloudinaryResponse = await uploadOnCloudinary(file.path); // Multer provides file.path for local temp file
            if (cloudinaryResponse && cloudinaryResponse.url) {
                uploadedUrls.push(cloudinaryResponse.url);
            }
        }
        return uploadedUrls;
    };

    // Helper to upload a single file and return its Cloudinary URL
    const uploadAndMapSingleFile = async (fileArray) => {
        if (!fileArray || fileArray.length === 0) return null;
        const cloudinaryResponse = await uploadOnCloudinary(fileArray[0].path); // Multer provides file.path
        return cloudinaryResponse ? cloudinaryResponse.url : null;
    };

    // Handle files based on annexure type
    if (type === 'a') {
        if (files.aeoCertificateFiles) {
            fileData.aeoCertificateFiles = await uploadAndMapMultipleFiles(files.aeoCertificateFiles);
        }
        if (files.siteListFiles) {
            fileData.siteListFiles = await uploadAndMapMultipleFiles(files.siteListFiles);
        }
        if (files.siteDetailsFiles) {
            fileData.siteDetailsFiles = await uploadAndMapMultipleFiles(files.siteDetailsFiles);
        }
        if (files.panFile) {
            fileData.panFile = await uploadAndMapSingleFile(files.panFile);
        }
        if (files.enterpriseEvidenceFile) {
            fileData.enterpriseEvidenceFile = await uploadAndMapSingleFile(files.enterpriseEvidenceFile);
        }
        if (files.signatureFile) {
            fileData.signatureFile = await uploadAndMapSingleFile(files.signatureFile);
        }
    } else if (type === 'b') {
        if (files.proceduralSecurityFile) {
            fileData.proceduralSecurityFile = await uploadAndMapSingleFile(files.proceduralSecurityFile);
        }
        if (files.documentSecurityFile) {
            fileData.documentSecurityFile = await uploadAndMapSingleFile(files.documentSecurityFile);
        }
        if (files.physicalSecurityFile) {
            fileData.physicalSecurityFile = await uploadAndMapSingleFile(files.physicalSecurityFile);
        }
        if (files.accessControlFile) {
            fileData.accessControlFile = await uploadAndMapSingleFile(files.accessControlFile);
        }
        if (files.personnelSecurityFile) {
            fileData.personnelSecurityFile = await uploadAndMapSingleFile(files.personnelSecurityFile);
        }
        if (files.trainingAndSkillUpgradationFile) {
            fileData.trainingAndSkillUpgradationFile = await uploadAndMapSingleFile(files.trainingAndSkillUpgradationFile);
        }
        if (files.govtSecurityComplianceFile) {
            fileData.govtSecurityComplianceFile = await uploadAndMapSingleFile(files.govtSecurityComplianceFile);
        }
    } else if (type === 'c') {
        // AnnexureC specific files (add based on your AnnexureC model)
    }

    return fileData;
};

// Helper function to process form data based on annexure type
const processFormData = (body, type) => {
    const processedData = { ...body };

    if (type === 'a') {
        if (processedData.isAeoCertified) {
            processedData.isAeoCertified = processedData.isAeoCertified === 'true';
        }
        if (processedData.importDocsCount) {
            processedData.importDocsCount = parseInt(processedData.importDocsCount);
        }
        if (processedData.exportDocsCount) {
            processedData.exportDocsCount = parseInt(processedData.exportDocsCount);
        }
        if (processedData.date) {
            processedData.date = new Date(processedData.date);
        }
    }
    // Add similar processing for type 'b' and 'c' as needed
    return processedData;
};

// Helper function to delete files from Cloudinary (using public_id from URL)
const deleteFromCloudinary = async (fileUrls) => {
    if (!fileUrls) return;

    const urlsToDelete = Array.isArray(fileUrls) ? fileUrls : [fileUrls];

    for (const url of urlsToDelete) {
        if (url) {
            try {
                // Extract public_id from Cloudinary URL
                // Example URL: https://res.cloudinary.com/your_cloud_name/image/upload/v12345/public_id.ext
                const publicIdMatch = url.match(/\/upload\/(?:v\d+\/)?([^\.]+)\./);
                if (publicIdMatch && publicIdMatch[1]) {
                    const publicId = publicIdMatch[1];
                    await cloudinary.uploader.destroy(publicId);
                    console.log(`Deleted Cloudinary asset: ${publicId}`);
                } else {
                    console.warn(`Could not extract public_id from URL for deletion: ${url}`);
                }
            } catch (error) {
                console.error(`Error deleting Cloudinary asset ${url}:`, error.message);
            }
        }
    }
};

// Helper function to delete local temporary files (from Multer's temp directory)
const deleteLocalTempFiles = (files) => {
    if (!files) return;

    const filePathsToDelete = [];
    // Multer's req.files object can contain arrays for multiple files per field name
    // or an array with one element for single files.
    for (const key in files) {
        if (Array.isArray(files[key])) {
            files[key].forEach(file => filePathsToDelete.push(file.path));
        } else if (files[key] && files[key][0] && files[key][0].path) {
            filePathsToDelete.push(files[key][0].path);
        }
    }

    filePathsToDelete.forEach(filePath => {
        if (filePath && fs.existsSync(filePath)) {
            try {
                fs.unlinkSync(filePath);
                console.log(`Deleted local temp file: ${filePath}`);
            } catch (error) {
                console.error(`Error deleting local temp file ${filePath}:`, error);
            }
        }
    });
};


const createAnnexure = async (req, res) => {
    try {
        const type = req?.params?.type?.toLowerCase();
        const Model = models[type];
        console.log(req.applicationId);
        if (!Model) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        if (!req.body.applicationId){
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Application ID is required to create an annexure.' });
        }

        // Handle file uploads to Cloudinary (this is an async operation)
        const fileData = await handleFileUploads(req.files, type);

        // Process form data (non-file fields)
        const processedData = processFormData(req.body, type);

        // Combine all data for the database operation
        const annexureData = {
            ...processedData,
            ...fileData,
            userId: req.user.id, // Ensure userId is always set from authenticated user
            applicationId: req.body.applicationId // Ensure applicationId is set
        };

        // Check if an annexure for this user and application already exists
        // This prevents creating duplicate annexures of the same type for the same application
        const exists = await Model.findOne({
            applicationId: req.body.applicationId,
            userId: req.user.id,
        });

        if (exists) {
            // If a duplicate is found, delete the newly uploaded Cloudinary files
            if (fileData) {
                for (const key in fileData) {
                    // fileData[key] could be a single URL string or an array of URLs
                    await deleteFromCloudinary(fileData[key]);
                }
            }
            return res.status(409).json({ error: 'Annexure for this application and user already exists. Use PUT to update.' });
        }

        // Create new annexure
        const annexure = new Model(annexureData);
        await annexure.save();

        // Populate fields for the response
        const populatedAnnexure = await Model.findById(annexure._id)
            .populate('applicationId', 'applicationType status') // Populate relevant application fields
            .populate('userId', 'fullname email'); // Populate relevant user fields

        res.status(201).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} created successfully`,
            data: populatedAnnexure
        });
    } catch (err) {
        console.error('Error creating annexure:', err);
        // Comprehensive cleanup in case of error:
        // 1. Delete local temporary files (if Multer created them)
        if (req.files) {
            deleteLocalTempFiles(req.files);
        }
        // 2. Attempt to delete any files that might have been successfully uploaded to Cloudinary
        //    This requires re-processing req.files to get their original paths, then converting to Cloudinary URLs
        //    (This is a best-effort cleanup; if handleFileUploads failed partially, some might remain)
        if (req.files && Object.keys(req.files).length > 0) {
            // Create a temporary object to hold Cloudinary URLs if the upload process was interrupted
            const uploadedCloudinaryUrls = {};
            for (const fieldName in req.files) {
                if (Array.isArray(req.files[fieldName])) {
                    for (const file of req.files[fieldName]) {
                        // Attempt to deduce Cloudinary URL if it was uploaded before error
                        // This is tricky without the actual response, so we rely on `handleFileUploads`
                        // A more robust solution might involve tracking successful Cloudinary uploads in a temp array
                        // and deleting them from there. For now, we assume `handleFileUploads` did its job
                        // and we just need to delete based on the paths it would have processed.
                        // However, since `handleFileUploads` is async, if the error happened *after* it,
                        // but before DB save, `fileData` would contain the URLs.
                        // Let's use the `fileData` if it was successfully generated.
                        if (fileData[fieldName]) { // If fileData was successfully populated for this field
                            uploadedCloudinaryUrls[fieldName] = fileData[fieldName];
                        }
                    }
                }
            }
            for (const key in uploadedCloudinaryUrls) {
                await deleteFromCloudinary(uploadedCloudinaryUrls[key]);
            }
        }

        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};


const updateAnnexure = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Use req.params.annexureId to find the annexure
        const annexureId = req.params.annexureId;
        if (!annexureId) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Annexure ID is required for update.' });
        }

        // Find existing annexure by its _id AND userId (for security)
        const existingAnnexure = await Model.findOne({
            _id: annexureId,
            userId: req.user.id // Ensure only the owner can update
        });

        if (!existingAnnexure) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(404).json({ error: 'Annexure not found or you do not have permission to update it.' });
        }

        // Handle file uploads to Cloudinary (this is an async operation)
        const fileData = await handleFileUploads(req.files, type);

        // Process form data
        const processedData = processFormData(req.body, type);

        // Combine all data for the database update
        const updateData = {
            ...processedData,
            ...fileData // This now contains Cloudinary URLs
        };

        // Delete old files from Cloudinary if new ones are provided for specific fields
        // This logic needs to be specific to each annexure type and its file fields
        if (fileData) { // Only proceed if new files were actually uploaded
            if (type === 'a') {
                if (fileData.aeoCertificateFiles && fileData.aeoCertificateFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.aeoCertificateFiles);
                }
                if (fileData.siteListFiles && fileData.siteListFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.siteListFiles);
                }
                if (fileData.siteDetailsFiles && fileData.siteDetailsFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.siteDetailsFiles);
                }
                if (fileData.panFile) { // Single file field
                    await deleteFromCloudinary(existingAnnexure.panFile);
                }
                if (fileData.enterpriseEvidenceFile) { // Single file field
                    await deleteFromCloudinary(existingAnnexure.enterpriseEvidenceFile);
                }
                if (fileData.signatureFile) { // Single file field
                    await deleteFromCloudinary(existingAnnexure.signatureFile);
                }
            } else if (type === 'b') {
                if (fileData.proceduralSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.proceduralSecurityFile);
                }
                if (fileData.documentSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.documentSecurityFile);
                }
                if (fileData.physicalSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.physicalSecurityFile);
                }
                if (fileData.accessControlFile) {
                    await deleteFromCloudinary(existingAnnexure.accessControlFile);
                }
                if (fileData.personnelSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.personnelSecurityFile);
                }
                if (fileData.trainingAndSkillUpgradationFile) {
                    await deleteFromCloudinary(existingAnnexure.trainingAndSkillUpgradationFile);
                }
                if (fileData.govtSecurityComplianceFile) {
                    await deleteFromCloudinary(existingAnnexure.govtSecurityComplianceFile);
                }
            }
            // Add similar logic for type 'c' if it has files
        }

        const updated = await Model.findOneAndUpdate(
            { _id: annexureId, userId: req.user.id }, // Find by annexure _id and userId
            { $set: updateData }, // Use $set to update only provided fields
            { new: true, runValidators: true }
        );

        // Populate fields for the response
        const populatedAnnexure = await Model.findById(updated._id)
            .populate('applicationId', 'applicationType status')
            .populate('userId', 'fullname email');

        res.status(200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} updated successfully`,
            data: populatedAnnexure
        });
    } catch (err) {
        console.error('Error updating annexure:', err);
        // Comprehensive cleanup in case of error:
        // 1. Delete local temporary files (if Multer created them)
        if (req.files) {
            deleteLocalTempFiles(req.files);
        }
        // 2. Attempt to delete any files that might have been successfully uploaded to Cloudinary
        if (req.files && Object.keys(req.files).length > 0) {
            const uploadedCloudinaryUrls = {};
            for (const fieldName in req.files) {
                if (Array.isArray(req.files[fieldName])) {
                    for (const file of req.files[fieldName]) {
                        if (fileData[fieldName]) {
                            uploadedCloudinaryUrls[fieldName] = fileData[fieldName];
                        }
                    }
                }
            }
            for (const key in uploadedCloudinaryUrls) {
                await deleteFromCloudinary(uploadedCloudinaryUrls[key]);
            }
        }
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Get specific annexure
const getAnnexure = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Use req.params.annexureId to find the annexure
        const annexureId = req.params.annexureId;
        if (!annexureId) {
            return res.status(400).json({ error: 'Annexure ID is required to retrieve.' });
        }

        const annexure = await Model.findOne({
            _id: annexureId, // Find by annexure _id
            userId: req.user.id // Ensure only the owner can retrieve
        }).populate('applicationId', 'applicationType status')
            .populate('userId', 'fullname email'); // Use 'fullname' as per user.model.js

        if (!annexure) {
            return res.status(404).json({ error: 'Annexure not found or you do not have permission to access it.' });
        }

        res.status(200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} retrieved successfully`,
            data: annexure
        });
    } catch (err) {
        console.error('Error getting annexure:', err);
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Get all annexures of a specific type (still filtered by userId)
const getAllAnnexures = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        const { page = 1, limit = 10, status } = req.query;

        const filter = { userId: req.user.id }; // Still filter by user to get their annexures
        if (status) filter.status = status;

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            populate: [
                { path: 'applicationId', select: 'applicationType status' },
                { path: 'userId', select: 'fullname email' } // Use 'fullname' as per user.model.js
            ],
            sort: { createdAt: -1 }
        };

        // Assuming Model.paginate is available (e.g., if you're using mongoose-paginate-v2)
        const result = await Model.paginate(filter, options);

        res.status(200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} records retrieved successfully`,
            data: result.docs,
            pagination: {
                currentPage: result.page,
                totalPages: result.totalPages,
                totalRecords: result.totalDocs,
                hasNextPage: result.hasNextPage,
                hasPrevPage: result.hasPrevPage
            }
        });
    } catch (err) {
        console.error('Error getting annexures:', err);
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// Delete annexure
const deleteAnnexure = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Use req.params.annexureId to find the annexure
        const annexureId = req.params.annexureId;
        if (!annexureId) {
            return res.status(400).json({ error: 'Annexure ID is required for deletion.' });
        }

        const annexure = await Model.findOne({
            _id: annexureId, // Find by annexure _id
            userId: req.user.id // Ensure only the owner can delete
        });

        if (!annexure) {
            return res.status(404).json({ error: 'Annexure not found or you do not have permission to delete it.' });
        }

        // Delete associated files from Cloudinary based on type
        if (type === 'a') {
            await deleteFromCloudinary(annexure.aeoCertificateFiles);
            await deleteFromCloudinary(annexure.siteListFiles);
            await deleteFromCloudinary(annexure.siteDetailsFiles);
            await deleteFromCloudinary(annexure.panFile);
            await deleteFromCloudinary(annexure.enterpriseEvidenceFile);
            await deleteFromCloudinary(annexure.signatureFile);
        } else if (type === 'b') {
            await deleteFromCloudinary(annexure.proceduralSecurityFile);
            await deleteFromCloudinary(annexure.documentSecurityFile);
            await deleteFromCloudinary(annexure.physicalSecurityFile);
            await deleteFromCloudinary(annexure.accessControlFile);
            await deleteFromCloudinary(annexure.personnelSecurityFile);
            await deleteFromCloudinary(annexure.trainingAndSkillUpgradationFile);
            await deleteFromCloudinary(annexure.govtSecurityComplianceFile);
        }
        // Add logic for type 'c' if it has files

        await Model.findOneAndDelete({
            _id: annexureId, // Delete by annexure _id
            userId: req.user.id
        });

        res.status(200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} deleted successfully`
        });
    } catch (err) {
        console.error('Error deleting annexure:', err);
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

// The upsertAnnexure function is included here for completeness,
// but remember to choose between using create/update or upsert in your routes.
// It is not exported here as createAnnexure and updateAnnexure are used.
const upsertAnnexure = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        if (!req.body.applicationId) {
            if (req.files) { deleteLocalTempFiles(req.files); }
            return res.status(400).json({ error: 'Application ID is required for upsert operation.' });
        }

        const fileData = await handleFileUploads(req.files, type);
        const processedData = processFormData(req.body, type);

        const annexureData = {
            ...processedData,
            ...fileData,
            userId: req.user.id,
            applicationId: req.body.applicationId
        };

        const existingAnnexure = await Model.findOne({
            applicationId: req.body.applicationId,
            userId: req.user.id
        });

        let resultAnnexure;
        let operationType;

        if (existingAnnexure) {
            operationType = 'update';

            // Delete old files from Cloudinary if new ones are provided
            if (type === 'a') {
                if (fileData.aeoCertificateFiles && fileData.aeoCertificateFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.aeoCertificateFiles);
                }
                if (fileData.siteListFiles && fileData.siteListFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.siteListFiles);
                }
                if (fileData.siteDetailsFiles && fileData.siteDetailsFiles.length > 0) {
                    await deleteFromCloudinary(existingAnnexure.siteDetailsFiles);
                }
                if (fileData.panFile) {
                    await deleteFromCloudinary(existingAnnexure.panFile);
                }
                if (fileData.enterpriseEvidenceFile) {
                    await deleteFromCloudinary(existingAnnexure.enterpriseEvidenceFile);
                }
                if (fileData.signatureFile) {
                    await deleteFromCloudinary(existingAnnexure.signatureFile);
                }
            } else if (type === 'b') {
                if (fileData.proceduralSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.proceduralSecurityFile);
                }
                if (fileData.documentSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.documentSecurityFile);
                }
                if (fileData.physicalSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.physicalSecurityFile);
                }
                if (fileData.accessControlFile) {
                    await deleteFromCloudinary(existingAnnexure.accessControlFile);
                }
                if (fileData.personnelSecurityFile) {
                    await deleteFromCloudinary(existingAnnexure.personnelSecurityFile);
                }
                if (fileData.trainingAndSkillUpgradationFile) {
                    await deleteFromCloudinary(existingAnnexure.trainingAndSkillUpgradationFile);
                }
                if (fileData.govtSecurityComplianceFile) {
                    await deleteFromCloudinary(existingAnnexure.govtSecurityComplianceFile);
                }
            }
            // Add similar logic for type 'c' if it has files

            resultAnnexure = await Model.findOneAndUpdate(
                { applicationId: req.body.applicationId, userId: req.user.id },
                { $set: annexureData },
                { new: true, runValidators: true }
            );

        } else {
            operationType = 'create';
            const newAnnexure = new Model(annexureData);
            resultAnnexure = await newAnnexure.save();
        }

        const populatedAnnexure = await Model.findById(resultAnnexure._id)
            .populate('applicationId', 'applicationType status')
            .populate('userId', 'fullname email');

        res.status(operationType === 'create' ? 201 : 200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} ${operationType}d successfully`,
            data: populatedAnnexure,
            operation: operationType
        });

    } catch (err) {
        console.error('Error upserting annexure:', err);
        if (req.files) {
            deleteLocalTempFiles(req.files);
        }
        if (typeof req.files !== 'undefined') {
            const uploadedCloudinaryUrls = {};
            for (const fieldName in req.files) {
                if (Array.isArray(req.files[fieldName])) {
                    for (const file of req.files[fieldName]) {
                        if (fileData[fieldName]) {
                            uploadedCloudinaryUrls[fieldName] = fileData[fieldName];
                        }
                    }
                }
            }
            for (const key in uploadedCloudinaryUrls) {
                await deleteFromCloudinary(uploadedCloudinaryUrls[key]);
            }
        }
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};


export {
    createAnnexure,
    updateAnnexure,
    getAnnexure,
    getAllAnnexures,
    deleteAnnexure,
    upsertAnnexure
};
