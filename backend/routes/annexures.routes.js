import { Router } from 'express';
import { upload } from '../middleware/multer.middleware.js'; // Ensure correct path and filename of your multer config
import { verifyJWT } from '../middleware/auth.middleware.js'; // Assuming you still need this for JWT verification
import {
    createAnnexure,
    updateAnnexure,
    getAnnexure,
    getAllAnnexures,
    deleteAnnexure
} from '../controllers/annexure.controller.js';

const router = Router();

// This middleware will dynamically configure and apply Multer's file fields
const annexureUploadMiddleware = (req, res, next) => {
    const type = req.params.type.toLowerCase(); // Get the annexure type from URL parameter

    let uploadFields = [];

    // Define file upload fields based on annexure type
    if (type === 'a') {
        // AnnexureA file fields [based on annexureA.model.js]
        uploadFields = [
            { name: 'aeoCertificateFiles', maxCount: 10 },
            { name: 'siteListFiles', maxCount: 10 },
            { name: 'panFile', maxCount: 1 },
            { name: 'siteDetailsFiles', maxCount: 10 },
            { name: 'enterpriseEvidenceFile', maxCount: 1 },
            { name: 'signatureFile', maxCount: 1 }
        ];
    } else if (type === 'b') {
        // AnnexureB file fields [based on annexureB.model.js]
        uploadFields = [
            { name: 'proceduralSecurityFile', maxCount: 1 },
            { name: 'documentSecurityFile', maxCount: 1 },
            { name: 'physicalSecurityFile', maxCount: 1 },
            { name: 'accessControlFile', maxCount: 1 },
            { name: 'personnelSecurityFile', maxCount: 1 },
            { name: 'trainingAndSkillUpgradationFile', maxCount: 1 },
            { name: 'govtSecurityComplianceFile', maxCount: 1 },
        ];
    } else if (type === 'c') {
        // AnnexureC file fields (customize based on your AnnexureC model)
        // Example:
        // uploadFields = [
        //     { name: 'someCFile', maxCount: 1 },
        //     { name: 'anotherCFile', maxCount: 5 },
        // ];
    }
    // Add more `else if` blocks for 'd', 'e', etc., as you add new annexure types

    // If there are specific file fields for this annexure type,
    // apply the Multer `fields` middleware.
    if (uploadFields.length > 0) {
        upload.fields(uploadFields)(req, res, next);
    } else {
        // If no specific file fields, or for an unknown type,
        // use `upload.none()` to process text fields without expecting files.
        upload.none()(req, res, next);
    }
};


// Routes for annexures
router.route('/:type')
    .post(verifyJWT, annexureUploadMiddleware, createAnnexure) // Apply the dynamic upload middleware
    .put(verifyJWT, annexureUploadMiddleware, updateAnnexure); // Apply the dynamic upload middleware for updates

router.route('/:type/:applicationId')
    .get(verifyJWT, getAnnexure)
    .delete(verifyJWT, deleteAnnexure);

router.route('/all/:type')
    .get(verifyJWT, getAllAnnexures);

export default router;