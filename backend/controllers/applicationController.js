import { ApiError } from "../utils/ApiError.js"
import {Application} from '../models/application.model.js';
import express from 'express'


//@desc Get application
//@route GET /api/application/:id
//@access public
const getApplication = async (req, res) => {
    try {
        const app = await Application.findById(req.params.id);
        if (!app){
            throw new ApiError(404, 'application not found')
        }
        res.json(app);
    }
    catch (err) {
        throw new ApiError(500, err?.message || 'Error retrieving application')
        // res.status(500).json({ error: `Error retrieving application`, details: err.message });
    }
});

//@desc Create application 
//@route POST /api/application
//@access public
const createApplication = async (req, res) => {
    try {
        const { userId, applicationType } = req.body;

        const newApp = new Application({
            userId,
            applicationType,
            status: 'draft',
        });
        const savedApp = await newApp.save();
        res.status(201).json(savedApp);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create application', details: err.message });
    }
};

//@desc Update application 
//@route PUT /api/application/:id
//@access public
const updateApplication = async (req, res) => {
    try {
        const updatedApp = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedApp);
    } catch (err) {
        res.status(500).json({
            error: 'failed to update application', details: err.message
        });
    }
});

export { getApplication, createApplication, updateApplication }