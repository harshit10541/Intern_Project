const express = require("express");
const router = express.Router();
const {getApplication, createApplication, updateApplication} = require("../controllers/applicationController");

//create a new application
router.route('/').post(createApplication);

//Get an application by ID
router.route('/:id').get(getApplication)
//update an application
                    .put(updateApplication);



module.exports = router;
