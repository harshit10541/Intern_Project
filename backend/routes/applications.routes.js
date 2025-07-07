import { Router } from 'express'
import {
    getApplication,
    createApplication,
    updateApplication
} from '../controllers/application.controller.js'

const router = Router();

router.route('/').post(createApplication)
router.route('/:id').get(getApplication).put(updateApplication)

export default router;
