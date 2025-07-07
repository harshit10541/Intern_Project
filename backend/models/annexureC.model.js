import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureCSchema = new mongoose.Schema({
	applicationId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Application',
		required: true,
	},

	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},

	applicationType: {
		type: String,
		enum: ['T1', 'T2', 'T3', 'LO'],
		required: true,
	},

	processFlowDescription: {
		type: String,
		required: true,
	},

	activityRoleDescription: {
		type: String,
		required: true,
	},

	processDiagramFile: {
		type: String, // path or URL to the uploaded file
	},

	status: {
		type: String,
		enum: ['draft', 'submitted'],
		default: 'draft',
	},
}, {
	timestamps: true,
});

export const annexureCModel = mongoose.model('AnnexureC', AnnexureCSchema);
