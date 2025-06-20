import { Router } from 'express'
import {
    getApplication,
    createApplication,
    updateApplication
} from '../controllers/applicationController.js'

const router = Router()

router.route('/').post(createApplication)
router.route('/:id').get(getApplication).put(updateApplication)

export default router
