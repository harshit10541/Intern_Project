import express, { Router } from 'express'

import {
    getApplication,
    createApplication,
    updateApplication
} from "../controllers/applicationController"

const router = Router()

//create a new application
router.route('/').post(createApplication);

//Get an application by ID
router.route('/:id').get(getApplication)
    //update an application
    .put(updateApplication);


export { router }
