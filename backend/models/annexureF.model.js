import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

// Define a sub-schema for individual business partner entries
const AnnexureFSchema = new mongoose.Schema({
  // Name and Address of the business partner
  nameAndAddress: {
    type: String,
    required: true,
    trim: true
  },
  // Nature of Business (Logistics providers, Custodians/Terminal operators, Customs Brokers or Warehouse operators)
  natureOfBusiness: {
    type: String,
    required: true,
    trim: true
    // You might want to make this an enum if the options are fixed:
    // enum: ['Logistics provider', 'Custodian/Terminal operator', 'Customs Broker', 'Warehouse operator']
  },
  // Whether Holder of AEO-T2 Certificate (Yes/No)
  isAEO_T2_CertificateHolder: {
    type: String,
    enum: ['Yes', 'No', null], // Using null for unselected, consistent with previous schemas
    default: null,
    required: true // Assuming this field must always be answered
  }
}, {
  _id: false // Prevents Mongoose from creating an _id for subdocuments if not explicitly needed
});

const BusinessPartnersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model
    // required: true, // Uncomment if a user is always required
  },
  // If this annexure is part of a larger application, you might link it here
  // applicationId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Application', // Assuming you have an 'Application' model
  //   // required: true, // Uncomment if an application is always required
  // },

  // An array to hold multiple business partner entries
  businessPartners: [BusinessPartnerEntrySchema],

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const businessPartnersModel = mongoose.model('BusinessPartners', BusinessPartnersSchema);
