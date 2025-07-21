import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureE4Schema = new mongoose.Schema({
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

  // E.4 a) Whether the applicant has been financially solvent during the three financial years preceding the date of application?
  // (Solvency would generally be defined as good financial standing that is sufficient to fulfill the commitments of the applicant including ability to pay duties)
  // Please attach Balance Sheets for last three Financial Years.
  complianceA: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    // Although the image says "Please attach Balance Sheets", there's no explicit file upload button.
    // If you plan to have one, you can add a 'file' field here.
    // file: { type: String, trim: true, default: null }
  },
  // E.4 b) Whether, where required, the accounts have been filed with Registrar of Companies within the time limits laid down by law?
  complianceB: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.4 c) Whether, where applicable, audit qualifications or comments in the annual accounts about the continuation of the business as a going concern?
  complianceC: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.4 d) Whether there are any contingent liabilities or provisions?
  complianceD: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.4 e) Whether the net current assets are positive?
  complianceE: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.4 f) Whether the entity has been defaulted in payment of due taxes during the past three years?
  complianceF: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.4 g) Whether there is solvency certificate issued by the Statutory Auditor? If yes, provide the copy.
  complianceG: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    // Assuming 'provide the copy' implies a file upload
    file: { type: String, trim: true, default: null }
  },
  // E.4 h) Whether the business entity is currently listed as insolvent, or in liquidation or bankruptcy?
  complianceH: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const financialSolvencyModel = mongoose.model('FinancialSolvency', FinancialSolvencySchema);
