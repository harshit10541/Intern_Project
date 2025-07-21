import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureE3Schema = new mongoose.Schema({
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

  // E.3 a) Whether maintaining an accounting system consistent with Generally Accepted Accounting Principles (GAAP) / International Financial Reporting
  // Standards (IFRS) which facilitates audit-based Customs control?
  complianceA: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 b) Whether there is an administrative set up which corresponds to the type and size of Business and which is suitable for the management of the flow of
  // goods, and have internal controls capable of detecting illegal or irregular transactions?
  complianceB: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 c) Wherever applicable, have satisfactory procedures in place for the handling of licenses and authorizations connected to export/import?
  complianceC: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 d) Whether having satisfactory procedures in place for archiving of the company's records and information, and also for protection against the loss of
  // information?
  complianceD: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 e) Whether there is a system to ensure that employees are made aware of the need to inform the Customs authorities whenever compliance difficulties are
  // discovered and establish suitable contacts to inform the Customs authorities of such occurrences?
  complianceE: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 f) Whether there is a satisfactory procedure for verifying the accuracy of Customs declaration?
  complianceF: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true }
  },
  // E.3 g) Whether there is an appropriate information technology security measures to protect the applicant's computer system from unauthorized intrusion and to
  // secure the applicant's documentation?
  complianceG: {
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

export const commercialTransportRecordsModel = mongoose.model('CommercialTransportRecords', CommercialTransportRecordsSchema);
