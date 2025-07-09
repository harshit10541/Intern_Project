import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureBSchema = new mongoose.Schema({

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
    enum: ['T2', 'T3', 'LO'],
    required: true,
  },

  proceduralSecurityFile: String,
  documentSecurityFile: String,
  physicalSecurityFile: String,
  accessControlFile: String,
  personnelSecurityFile: String,
  trainingAndSkillUpgradationFile: String,
  govtSecurityComplianceFile: String,

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true,
});

export const annexureBModel = mongoose.model('AnnexureB', AnnexureBSchema);
