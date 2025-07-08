import { Router } from 'express';
import { upload } from '../middleware/multer.middleware.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import {
    createAnnexure,
    updateAnnexure,
    getAnnexure,
    getAllAnnexures,
    deleteAnnexure,
    upsertAnnexure
} from '../controllers/annexure.controller.js';

const router = Router();

// This middleware will dynamically configure and apply Multer's file fields
const annexureUploadMiddleware = (req, res, next) => {
    const type = req.params.type.toLowerCase();

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
        uploadFields = [];
    }

    // Apply the appropriate multer middleware
    if (uploadFields.length > 0) {
        upload.fields(uploadFields)(req, res, next);
    } else {
        upload.none()(req, res, next);
    }
};

// Special route for annexure-a (create or update automatically)
router.route('/annexure-a')
    .post(verifyJWT, annexureUploadMiddleware, upsertAnnexure);

// Generic routes for all annexure types
router.route('/:type')
    .post(verifyJWT, annexureUploadMiddleware, createAnnexure)
    .put(verifyJWT, annexureUploadMiddleware, updateAnnexure);

router.route('/:type/:applicationId')
    .get(verifyJWT, getAnnexure)
    .delete(verifyJWT, deleteAnnexure);

router.route('/all/:type')
    .get(verifyJWT, getAllAnnexures);

export default router;