import { upload } from './multer.middleware.js'; // Adjust path as needed

export const annexureUploadMiddleware = (req, res, next) => {
    const type = req.params.type.toLowerCase() // This line extracts 'a' from the URL
    console.log("type:", type)
    let uploadFields = [];
    if (type === 'a') {
        uploadFields = [
            { name: 'aeoCertificateFiles', maxCount: 10 },
            { name: 'siteListFiles', maxCount: 10 },
            { name: 'panFile', maxCount: 1 },
            { name: 'siteDetailsFiles', maxCount: 10 },
            { name: 'enterpriseEvidenceFile', maxCount: 1 },
            { name: 'signatureFile', maxCount: 1 }
        ];
    }
    else if (type === 'b') {
        uploadFields = [
            { name: 'proceduralSecurityFile', maxCount: 1 },
            { name: 'documentSecurityFile', maxCount: 1 },
            { name: 'physicalSecurityFile', maxCount: 1 },
            { name: 'accessControlFile', maxCount: 1 },
            { name: 'personnelSecurityFile', maxCount: 1 },
            { name: 'trainingAndSkillUpgradationFile', maxCount: 1 },
            { name: 'govtSecurityComplianceFile', maxCount: 1 }
        ];
    } else if (type === 'c') {
        uploadFields = []; // Customize when ready
    } else {
        return res.status(400).json({ error: 'Invalid annexure type.' });
    }

    // Apply the appropriate multer middleware
    if (uploadFields.length > 0) {
        return upload.fields(uploadFields)(req, res, next);
    } else {
        return upload.none()(req, res, next);
    }
};
