import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureASchema = new Schema({
	applicationId: {
		type: Schema.Types.ObjectId,
		ref: 'Application',
		// required: true,
	},
	// annexureId: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Application',
	// 	// required: true,
	// },

	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		// required: true,
	},

	applicationType: {
		type: String,
		enum: ['T1', 'T2', 'T3', 'LO', 'MSME'],
		required: true,
	},

	companyName: String,
	businessCategory: String,
	isAeoCertified: Boolean,
	aeoCertificateFiles: [String],

	address: String,
	siteListFiles: [String],

	contactPerson: String,
	designation: String,
	phoneNumber: String,
	mobileNumber: String,
	faxNumber: String,
	email: String,

	companyRegistrationNumber: String,
	pan: String,
	panFile: String,

	siteDetails: String,
	siteDetailsFiles: [String],

	majorImports: String,
	mainImportCountries: String,
	majorExports: String,
	mainExportCountries: String,

	importDocsCount: Number,
	exportDocsCount: Number,

	enterpriseCategory: {
		type: String,
		enum: ['Micro', 'Small', 'Medium'],
	},
	enterpriseEvidenceFile: String,

	place: String,
	date: Date,
	fullName: String,
	position: String,

	signatureFile: String,

	status: {
		type: String,
		enum: ['draft', 'submitted'],
		default: 'draft',
	},
}, {
	timestamps: true,
});

export const annexureAModel = mongoose.model('AnnexureA', AnnexureASchema);
// export default model('AnnexureA', AnnexureASchema);
