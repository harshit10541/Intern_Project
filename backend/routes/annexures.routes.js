import { Router } from 'express';
import { verifyJWT } from '../middleware/auth.middleware.js'
import {
    createAnnexure,
    updateAnnexure,
    getAnnexure,
    getAllAnnexures,
    deleteAnnexure,
    upsertAnnexure
} from '../controllers/annexure.controller.js';
import { annexureUploadMiddleware } from '../middleware/annexureUpload.middleware.js';

const router = Router();

// Special route for annexure-a (create or update automatically)

// router.route('/:type').post(upsertAnnexure)



// Generic routes for all annexure types
router.route('/:type')
    .post(verifyJWT, annexureUploadMiddleware, createAnnexure)

router.route('/:type/:annexureId')
    .get(verifyJWT, getAnnexure)
    .delete(verifyJWT, deleteAnnexure)
    .put(verifyJWT, annexureUploadMiddleware, updateAnnexure)

router.route('/all/:type').get(verifyJWT, getAllAnnexures)
export default router;
