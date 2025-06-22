import express from 'express';
const router = express.Router();
import { createAnnexure, updateAnnexure } from '../controllers/annexureController.js';

// app.get('/', (req, res) =>{
//     res.json("Get all");
// });


router.route('/:type').post(createAnnexure);
// router.route('/:type').put(updateAnnexure);
// router.post('/:type', createAnnexure);
// router.put('/:type', updateAnnexure);
export default router;
