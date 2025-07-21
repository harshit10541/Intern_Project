import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureE1Schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model
    // required: true, // Uncomment if a user is always required
  },
  // If this compliance form is part of a larger application, you might link it here
  // applicationId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Application', // Assuming you have an 'Application' model
  //   // required: true, // Uncomment if an application is always required
  // },

  // E.1 a) Whether having Customs and/or other Departments' license/ certificate with respect to category of AEO application?
  complianceA: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null }, // null for unselected
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null } // URL or path to uploaded file
  },
  // E.1 b) Whether having other Customs, Central Excise, Service Tax and other Department's licenses/registration/ certificates?
  complianceB: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null }
  },
  // E.1 c) Whether Proprietorship Firm, Partnership Firm, Public or Private Limited Company etc.?
  complianceC: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null }, // This question doesn't have a direct Yes/No in the UI, but the structure allows for it if needed.
    remarks: { type: String, trim: true }, // This will store the type of business entity
    file: { type: String, trim: true, default: null }
  },
  // E.1 d) Whether your entity is established in India?
  complianceD: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }, // For additional details if 'Yes'
    file: { type: String, trim: true, default: null }
  },
  // E.1 e) Whether your entity has business activities for at least three financial years preceding the date of application?
  complianceE: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
    // No file upload shown for this question
  },
  // E.1 f) Whether you have filed or handled at least 25 documents i.e. Bills of Entry or Shipping bills, with the Customs Authorities during the last financial year.
  complianceF: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null }
  },
  // E.1 g) Whether the applicant has ever been convicted of a criminal offence?
  complianceG: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true } // For complete details if 'Yes'
    // No file upload shown for this question
  },

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const generalComplianceModel = mongoose.model('GeneralCompliance', GeneralComplianceSchema);
