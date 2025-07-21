import { Schema, model } from 'mongoose';
// No need to import mongoose again if Schema and model are destructured from it.
// However, if you prefer to use mongoose.Schema.Types.ObjectId, keep it.
// For consistency with your AnnexureBSchema, I'll keep the direct mongoose import for ObjectId.
import mongoose from 'mongoose';


const AnnexureDSchema = new mongoose.Schema({
  // External perimeter features like boundary roads, railway lines, streams/rivers, neighboring properties.
  externalPerimeterFeatures: {
    type: String,
    // required: true,
    trim: true
  },
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      // required: true,
    },
  // All access points to the site (e.g., vehicle, rail and pedestrian entrances) with traffic flows.
  accessPointsAndTrafficFlows: {
    type: String,
    // required: true,
    trim: true
  },
  // All buildings identified with access ways (e.g., administration office, export/import storage areas,
  // export/import packing areas, export container movement).
  buildingsAndAccessWays: {
    type: String,
    // required: true,
    trim: true
  },
  // Internal and/or external lighting facilities that contribute to security.
  lightingFacilities: {
    type: String,
    // required: true,
    trim: true
  },
  // Other security features (e.g., CCTV, electronic access gates).
  otherSecurityFeatures: {
    type: String,
    // required: true,
    trim: true
  },
  // Visitor, contractor and company personnel parking areas.
  parkingAreas: {
    type: String,
    // required: true,
    trim: true
  },
  // Perimeter fences with description (e.g., 2-metre high security fence).
  perimeterFences: {
    type: String,
    // required: true,
    trim: true
  },
  // Areas used for container storage.
  containerStorageAreas: {
    type: String,
    // required: true,
    trim: true
  },
  // This field will store the URL or path to the uploaded site plan file.
  // It's optional, so default is null.
  uploadedSitePlanUrl: {
    type: String,
    trim: true,
    default: null
  },
  // Similar to your AnnexureBSchema, you might want to link this to a User or Application
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a 'User' model
    // required: true, // Uncomment if a user is always required
  },
  // If this site plan is part of a larger application, you might link it here
  // applicationId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Application', // Assuming you have an 'Application' model
  //   // required: true, // Uncomment if an application is always required
  // },
  // Status of the site plan submission
  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const sitePlanModel = mongoose.model('SitePlan', SitePlanSchema);
