import { Router } from 'express'
import {loginUser} from '../controllers/user.controllers.js'
const router = Router()
console.log("user.routes.js loaded")

router.route("/login").post(loginUser)