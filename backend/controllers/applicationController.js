const express = require('express');
const Application = require('../models/applicationModel');
const asyncHandler = require("express-async-handler");


//@desc Get application 
//@route GET /api/application/:id
//@access public
const getApplication = asyncHandler(async (req, res) =>{
    try{
        const app = await Application.findById(req.params.id);
        if (!app) return res.status(404).json({error: 'application not found'});
        res.json(app);
    }catch(err){
        res.status(500).json({error: `Error retrieving application`, details: err.message});
    }
});

//@desc Create application 
//@route POST /api/application
//@access public
const createApplication = asyncHandler(async (req, res) =>{
    try{
        const {userId, applicationType} = req.body;

        const newApp = new Application({
            userId,
            applicationType,
            status: 'draft',
        });
        const savedApp = await newApp.save();
        res.status(201).json(savedApp);
    }catch (err) {
    res.status(500).json({ error: 'Failed to create application', details: err.message });
  }
});

//@desc Update application 
//@route PUT /api/application/:id
//@access public
const updateApplication = asyncHandler(async (req, res) =>{
    try{
        const updatedApp = await Application.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(updatedApp);
    }catch(err){
        res.status(500).json({
            error: 'failed to update application', details: err.message
        });
    }
});

module.exports = {getApplication, createApplication, updateApplication}