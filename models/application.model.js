// models/Application.js
import mongoose, { Schema } from 'mongoose'
//{id, type, status, formProgress, annexures}
const applicationSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		// required: true,
	},
	applicationType: {
		type: String,
		enum: ['T1', 'T2', 'T3', 'LO', 'MSME'],
		required: true,
	},
	status: {
		type: String,
		enum: ['draft', 'submitted', 'in_review', 'approved', 'rejected'],
		default: 'draft',
	},
	formProgress: {
		type: Map,
		of: Boolean,
		default: {},
	},
	annexures: {
		type: Map,
		of: mongoose.Schema.Types.ObjectId, // Links to Annexure documents
		ref: 'Annexure',
		default: {},
	},
}, { timestamps: true });

export const Application = mongoose.model('Application', applicationSchema);
