import express from 'express';
const router = express.Router();
import { createAnnexure, updateAnnexure } from '../controllers/annexureController.js';

router.route('/:type').post(createAnnexure);
router.route('/:type').put(updateAnnexure);
// router.post('/:type', createAnnexure);
// router.put('/:type', updateAnnexure);
export default router;
