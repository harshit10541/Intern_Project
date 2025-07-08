import { annexureAModel } from '../models/annexureA.model.js';
import { annexureBModel } from '../models/annexureB.model.js';
import { annexureCModel } from '../models/annexureC.model.js';
import fs from 'fs';
import path from 'path';

const models = {
    a: annexureAModel,
    b: annexureBModel,
    c: annexureCModel,
};

// Helper function to handle file uploads based on annexure type
const handleFileUploads = (files, type) => {
    const fileData = {};

    if (!files) return fileData;

    // Common file handling for all types
    const handleMultipleFiles = (fileArray) => {
        return fileArray ? fileArray.map(file => file.filename) : [];
    };

    const handleSingleFile = (fileArray) => {
        return fileArray && fileArray[0] ? fileArray[0].filename : null;
    };

    // Handle files based on annexure type
    if (type === 'a') {
        // AnnexureA specific files
        if (files.aeoCertificateFiles) {
            fileData.aeoCertificateFiles = handleMultipleFiles(files.aeoCertificateFiles);
        }
        if (files.siteListFiles) {
            fileData.siteListFiles = handleMultipleFiles(files.siteListFiles);
        }
        if (files.siteDetailsFiles) {
            fileData.siteDetailsFiles = handleMultipleFiles(files.siteDetailsFiles);
        }
        if (files.panFile) {
            fileData.panFile = handleSingleFile(files.panFile);
        }
        if (files.enterpriseEvidenceFile) {
            fileData.enterpriseEvidenceFile = handleSingleFile(files.enterpriseEvidenceFile);
        }
        if (files.signatureFile) {
            fileData.signatureFile = handleSingleFile(files.signatureFile);
        }
    } else if (type === 'b') {
        // AnnexureB specific files
        if (files.proceduralSecurityFile) {
            fileData.proceduralSecurityFile = handleSingleFile(files.proceduralSecurityFile);
        }
        if (files.documentSecurityFile) {
            fileData.documentSecurityFile = handleSingleFile(files.documentSecurityFile);
        }
        if (files.physicalSecurityFile) {
            fileData.physicalSecurityFile = handleSingleFile(files.physicalSecurityFile);
        }
        if (files.accessControlFile) {
            fileData.accessControlFile = handleSingleFile(files.accessControlFile);
        }
        if (files.personnelSecurityFile) {
            fileData.personnelSecurityFile = handleSingleFile(files.personnelSecurityFile);
        }
        if (files.trainingAndSkillUpgradationFile) {
            fileData.trainingAndSkillUpgradationFile = handleSingleFile(files.trainingAndSkillUpgradationFile);
        }
        if (files.govtSecurityComplianceFile) {
            fileData.govtSecurityComplianceFile = handleSingleFile(files.govtSecurityComplianceFile);
        }
    } else if (type === 'c') {
        // AnnexureC specific files (add based on your AnnexureC model)
        // Example:
        // if (files.anotherFileField) {
        //     fileData.anotherFileField = handleMultipleFiles(files.anotherFileField);
        // }
    }

    return fileData;
};

// Helper function to process form data based on annexure type
const processFormData = (body, type) => {
    const processedData = { ...body };

    if (type === 'a') {
        // Convert string 'true'/'false' to boolean for AnnexureA
        if (processedData.isAeoCertified) {
            processedData.isAeoCertified = processedData.isAeoCertified === 'true';
        }

        // Convert string numbers to numbers
        if (processedData.importDocsCount) {
            processedData.importDocsCount = parseInt(processedData.importDocsCount);
        }
        if (processedData.exportDocsCount) {
            processedData.exportDocsCount = parseInt(processedData.exportDocsCount);
        }

        // Convert date string to Date object
        if (processedData.date) {
            processedData.date = new Date(processedData.date);
        }
    }

    // Add similar processing for type 'b' and 'c' as needed

    return processedData;
};

// Helper function to delete files
const deleteFiles = (filePaths) => {
    if (Array.isArray(filePaths)) {
        filePaths.forEach(filePath => {
            if (filePath) {
                const fullPath = path.join('./public/temp', filePath);
                if (fs.existsSync(fullPath)) {
                    fs.unlinkSync(fullPath);
                }
            }
        });
    } else if (filePaths) {
        const fullPath = path.join('./public/temp', filePaths);
        if (fs.existsSync(fullPath)) {
            fs.unlinkSync(fullPath);
        }
    }
};

// New function for upsert (create or update) - specifically for annexure-a route
const upsertAnnexure = async (req, res) => {
    try {
        const type = 'a'; // Fixed to 'a' for this route
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Validate required fields
        if (!req.body.applicationId) {
            return res.status(400).json({ error: 'Application ID is required.' });
        }

        // Handle file uploads
        const fileData = handleFileUploads(req.files, type);

        // Process form data
        const processedData = processFormData(req.body, type);

        // Combine all data
        const annexureData = {
            ...processedData,
            ...fileData
        };

        // Check if annexure already exists
        const existingAnnexure = await Model.findOne({
            applicationId: req.body.applicationId,
            userId: req.user.id
        });

        if (existingAnnexure) {
            // UPDATE existing annexure
            
            // Delete old files if new ones are uploaded
            if (fileData.aeoCertificateFiles && fileData.aeoCertificateFiles.length > 0) {
                deleteFiles(existingAnnexure.aeoCertificateFiles);
            }
            if (fileData.siteListFiles && fileData.siteListFiles.length > 0) {
                deleteFiles(existingAnnexure.siteListFiles);
            }
            if (fileData.siteDetailsFiles && fileData.siteDetailsFiles.length > 0) {
                deleteFiles(existingAnnexure.siteDetailsFiles);
            }
            if (fileData.panFile) {
                deleteFiles(existingAnnexure.panFile);
            }
            if (fileData.enterpriseEvidenceFile) {
                deleteFiles(existingAnnexure.enterpriseEvidenceFile);
            }
            if (fileData.signatureFile) {
                deleteFiles(existingAnnexure.signatureFile);
            }

            // Update the existing annexure
            const updatedAnnexure = await Model.findOneAndUpdate(
                { applicationId: req.body.applicationId, userId: req.user.id },
                { $set: annexureData },
                { new: true, runValidators: true }
            ).populate('applicationId', 'applicationNumber')
             .populate('userId', 'name email');

            return res.status(200).json({
                success: true,
                message: 'Annexure A updated successfully',
                data: updatedAnnexure,
                operation: 'update'
            });
        } else {
            // CREATE new annexure
            const newAnnexure = new Model({
                ...annexureData,
                userId: req.user.id
            });

            await newAnnexure.save();

            // Populate the newly created annexure
            const populatedAnnexure = await Model.findById(newAnnexure._id)
                .populate('applicationId', 'applicationNumber')
                .populate('userId', 'name email');

            return res.status(201).json({
                success: true,
                message: 'Annexure A created successfully',
                data: populatedAnnexure,
                operation: 'create'
            });
        }
    } catch (err) {
        console.error('Error upserting annexure:', err);
        res.status(500).json({
            success: false,
            error: err.message
        });
    }
};

const createAnnexure = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Handle file uploads
        const fileData = handleFileUploads(req.files, type);

        // Process form data
        const processedData = processFormData(req.body, type);

        // Combine all data
        const annexureData = {
            ...processedData,
            ...fileData
        };

        // Check if annexure already exists (uncomment if needed)
        const exists = await Model.findOne({
            applicationId: req.body.applicationId,
            userId: req.user.id,
        });

        if (exists) {
            return res.status(409).json({ error: 'Annexure already exists. Use PUT to update' });
        }

        // Create new annexure
        const annexure = new Model({ ...annexureData, userId: req.user.id });
        await annexure.save();

        res.status(201).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} created successfully`,
            data: annexure
        });
    } catch (err) {
        console.error('Error creating annexure:', err);
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
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        // Find existing annexure
        const existingAnnexure = await Model.findOne({
            applicationId: req.body.applicationId,
            userId: req.user.id
        });

        if (!existingAnnexure) {
            return res.status(404).json({ error: 'Annexure not found.' });
        }

        // Handle file uploads
        const fileData = handleFileUploads(req.files, type);

        // Process form data
        const processedData = processFormData(req.body, type);

        // Combine all data
        const updateData = {
            ...processedData,
            ...fileData
        };

        // Delete old files if new ones are uploaded (for AnnexureA)
        if (type === 'a' && fileData) {
            if (fileData.aeoCertificateFiles) {
                deleteFiles(existingAnnexure.aeoCertificateFiles);
            }
            if (fileData.siteListFiles) {
                deleteFiles(existingAnnexure.siteListFiles);
            }
            if (fileData.siteDetailsFiles) {
                deleteFiles(existingAnnexure.siteDetailsFiles);
            }
            if (fileData.panFile) {
                deleteFiles(existingAnnexure.panFile);
            }
            if (fileData.enterpriseEvidenceFile) {
                deleteFiles(existingAnnexure.enterpriseEvidenceFile);
            }
            if (fileData.signatureFile) {
                deleteFiles(existingAnnexure.signatureFile);
            }
        }

        const updated = await Model.findOneAndUpdate(
            { applicationId: req.body.applicationId, userId: req.user.id },
            updateData,
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: `Annexure ${type.toUpperCase()} updated successfully`,
            data: updated
        });
    } catch (err) {
        console.error('Error updating annexure:', err);
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

        const annexure = await Model.findOne({
            applicationId: req.params.applicationId,
            userId: req.user.id
        }).populate('applicationId', 'applicationNumber')
            .populate('userId', 'name email');

        if (!annexure) {
            return res.status(404).json({ error: 'Annexure not found.' });
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

// Get all annexures of a specific type
const getAllAnnexures = async (req, res) => {
    try {
        const type = req.params.type.toLowerCase();
        const Model = models[type];

        if (!Model) {
            return res.status(400).json({ error: 'Invalid annexure type.' });
        }

        const { page = 1, limit = 10, status } = req.query;

        const filter = { userId: req.user.id };
        if (status) filter.status = status;

        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            populate: [
                { path: 'applicationId', select: 'applicationNumber' },
                { path: 'userId', select: 'name email' }
            ],
            sort: { createdAt: -1 }
        };

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

        const annexure = await Model.findOne({
            applicationId: req.params.applicationId,
            userId: req.user.id
        });

        if (!annexure) {
            return res.status(404).json({ error: 'Annexure not found.' });
        }

        // Delete associated files (for AnnexureA)
        if (type === 'a') {
            deleteFiles(annexure.aeoCertificateFiles);
            deleteFiles(annexure.siteListFiles);
            deleteFiles(annexure.siteDetailsFiles);
            deleteFiles(annexure.panFile);
            deleteFiles(annexure.enterpriseEvidenceFile);
            deleteFiles(annexure.signatureFile);
        }

        await Model.findOneAndDelete({
            applicationId: req.params.applicationId,
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

export {
    createAnnexure,
    updateAnnexure,
    getAnnexure,
    getAllAnnexures,
    deleteAnnexure,
    upsertAnnexure
};