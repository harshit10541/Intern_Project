import { Router } from 'express'
import {
    registerUser,
    loginUser,
    logoutUser
} from '../controllers/user.controller.js'
import annexuresRoutes from './annexures.routes.js'
import applicationsRoutes from './applications.routes.js'
import authRoutes from './auth.routes.js'

const router = Router()

// console.log("User routes mounted at /api/v1/users")
// console.log('applicationsRoutes:', applicationsRoutes);
// console.log('typeof applicationsRoutes:', typeof applicationsRoutes);

// routes

router.route("/register").post(registerUser)

router.route("/login").post(loginUser)

// router.route("/logout").post(verifyJWT, logoutUser)

router.use('/api/auth', authRoutes)

router.use('/api/annexures', annexuresRoutes)

router.use('/api/applications', applicationsRoutes)

export default router
