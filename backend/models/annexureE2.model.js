import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureE2Schema = new mongoose.Schema({
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

  // E.2 a) Whether there is any cases of infringement of Customs Laws by any of the following persons over the three financial years preceding the submission of the application:
  // (i) the applicant; (ii) the person in charge of the applicant company or exercising control over its management;
  // (iii) the person responsible in the company for customs matters.
  // If yes, please indicate the details of the cases. Further, submit details related to volume of the customs related operations in 'Remarks' column.
  complianceA: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null } // URL or path to uploaded file
  },
  // E.2 b) Whether any SCN has been issued during last three financial years involving fraud, forgery, outright smuggling, clandestine removal
  // of excisable goods or cases where Service Tax has been collected from customers but not deposited to the Government.
  // If yes, please indicate the details in 'Remarks' column.
  complianceB: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null }
  },
  // E.2 c) Whether there is any case against you wherein prosecution has been launched?
  // If yes, please indicate the details in 'Remarks' column.
  complianceC: {
    answer: { type: String, enum: ['Yes', 'No', null], default: null },
    remarks: { type: String, trim: true },
    file: { type: String, trim: true, default: null }
  },
  // E.2 d) i. What is the amount of disputed duty demanded or recovery of drawback paid in excess or sought to be denied, in all the SCNs
  // issued under the Customs Act,1962 during the last three financial years?
  // ii. What is the total duty paid and drawback claimed during the preceding three financial years?
  // iii. What is the ratio of the disputed duty amount involved in the Show Cause Notices (SCNs) to the total duty paid/ drawback claimed
  // during the preceding three years?
  complianceD: {
    amountDisputedDuty: { type: String, trim: true }, // Corresponds to d.i
    totalDutyPaidAndDrawbackClaimed: { type: String, trim: true }, // Corresponds to d.ii
    ratioDisputedDutyToTotalDuty: { type: String, trim: true } // Corresponds to d.iii
    // No Yes/No or file upload shown for this section
  },
  // E.2 e) i. Whether procedures are in place to identify and disclose any irregularities or errors to the Customs authorities or, where
  // appropriate, other regulatory bodies? If yes, enclose evidence in support of this.
  // ii. Whether system is in place to take appropriate remedial action when irregularities or errors are identified? If yes, enclose evidence
  // in support of this.
  complianceE: {
    proceduresToIdentifyAndDisclose: { type: String, trim: true }, // Corresponds to e.i
    systemForRemedialAction: { type: String, trim: true } // Corresponds to e.ii
    // No Yes/No or file upload shown for this section
  },

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const legalComplianceModel = mongoose.model('LegalCompliance', LegalComplianceSchema);
