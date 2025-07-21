import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';

const AnnexureE5Schema = new mongoose.Schema({
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

  // E.5.1 Procedural Security
  proceduralSecurity: {
    // E.5.1 a) i. Whether there is a security policy and procedure manual...
    // ii. Whether there is any laid down procedures and manual which stipulates how seals are to be controlled and affixed...
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.1 b) Whether security measures are in place to ensure the integrity and security of processes...
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.1 c) Whether there is proper documentation of management procedure in place...
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.1 d) Whether there is a procedure in place to ensure that information received from business partners...
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.1 e) Whether procedure are in place to ensure that: a. Import / Export cargo are reconciled...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.1 f) Whether all shortages, overages, and other significant discrepancies or anomalies are resolved...
    complianceF: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.2 Premises Security
  premisesSecurity: {
    // E.5.2 a) Whether building is fully secured against unlawful entry?
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 b) Whether all external and internal gates, fences and windows are fully secured...
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 c) Whether the issuance of locks and keys is controlled by management or authorised personnel only?
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 d) Whether adequate internal and external lighting have been provided...
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 e) Whether gates through which vehicles and/or personnel enter/exit have been manned...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 f) Whether vehicles accessing restricted areas are parked in approved area...
    complianceF: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 g) Whether only properly identified and authorized persons, vehicles and goods are permitted access?
    complianceG: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 h) Whether access to document or cargo storage areas is restricted?
    complianceH: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 i) Whether there are appropriate security systems for access control?
    complianceI: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 j) Whether restricted areas have been clearly identified?
    complianceJ: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 k) Whether the integrity of structures and systems is periodically inspected?
    complianceK: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 l) Whether perimeter fencing exists for enclosing the areas around cargo handling and storage facilities?
    complianceL: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 m) Whether interior fencing exists within a cargo handling structure to segregate domestic, international, high value and hazardous cargo.
    complianceM: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 n) Whether the number of gates is kept to the minimum necessary for proper access and safety?
    complianceN: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.2 o) Whether unauthorized vehicles are prohibited from parking in or adjacent to cargo handling and storage areas?
    complianceO: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.3 Cargo Security
  cargoSecurity: {
    // E.5.3 a) Whether only properly identified and authorized persons have access to the cargo?
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 b) Whether integrity of cargo is ensured by permanent monitoring or keeping in a safe, locked area?
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 c) Whether all seals meet the current PAS / ISO 17712 standards for high security seals...
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 d) In cases of air consignments/courier consignments where it is not possible to procure and use PAS / ISO 17712 seals...
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 e) Whether the integrity of container seals are being checked by the authorized person...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 f) Whether only authorised personnel distribute container seals and safeguard their appropriate and legitimate use?
    complianceF: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 g) Whether the seven points inspection process is carried out in respect of containers before stuffing of cargo therein?
    complianceG: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 h) Whether is it possible to deliver goods to an unsupervised area?
    complianceH: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 i) Whether appropriate procedures have been laid down on measures to be taken when an unauthorized access or tampering is discovered?
    complianceI: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 j) Whether cargo are uniformly marked or stored in designated areas only?
    complianceJ: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 k) Whether appropriate procedures exist to weigh / tally the goods and compare them against transport documents...
    complianceK: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.3 l) Whether internal control procedures exist to deal with situations when any discrepancies and/or irregularities are discovered?
    complianceL: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.4 Conveyance Security
  conveyanceSecurity: {
    // E.5.4 a) Whether, to the extent possible, all conveyances used for the transportation of cargo within the supply chain are capable of being effectively secured?
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 b) Whether, to the extent possible, all operators of conveyances used for transport of cargo are trained to maintain the security of the conveyance and the cargo at all times while in its custody?
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 c) Whether all operators are required to report actual or suspicious incident to designated security department staff...
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 d) Whether potential places of concealment of illegal goods on conveyances are regularly inspected?
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 e) Whether the transporters are required to maintain the conveyance integrity while it is en route...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 f) Whether pre-determined routes are identified by the dispatcher?
    complianceF: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 g) Whether procedures are in place for random route checks, and for documenting and verifying the length of time...
    complianceG: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 h) Whether the dispatcher has a system to ensure that the drivers notify the dispatcher of any route delays...
    complianceH: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.4 i) Whether the management of transporters is required to perform a documented, periodic and random verification process...
    complianceI: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.5 Personnel Security
  personnelSecurity: {
    // E.5.5 a) Whether all reasonable precautions have been taken when recruiting new staff...
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.5 b) Whether periodic background checks are conducted on employees working in security sensitive positions?
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.5 c) Whether employee identification procedures require all employees to carry proper identification...
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.5 d) Whether procedures are in place to identify, record and deal with unauthorized or unidentified persons...
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.5 e) Whether procedures are in place to expeditiously remove identification and access to premises and information...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.6 Business Partner Security
  businessPartnerSecurity: {
    // E.5.6 a) Whether the applicant has written and verifiable process including the capability of financial soundness...
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.6 b) For AEO business partners, whether the applicant has obtained the copies of their AEO certificate?
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.6 c) For non-AEO business partners, whether the applicant has obtained written confirmation from them that they meet AEO equivalent security criteria?
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.6 d) Whether The applicant may obtain any of the following written documents from such business partners...
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.6 e) Whether a system exists to encourage other associated with his/her business partners to assess and enhance supply chain security?
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.6 f) Whether a system is in place for periodic reviews of business partner’s processes and facilities...
    complianceF: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  // E.5.7 Security Training and Threat Awareness
  securityTrainingAndThreatAwareness: {
    // E.5.7 a) Whether the applicant has established and maintained a threat awareness program for employees...
    complianceA: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.7 b) Whether employees of the applicant are aware of the procedures, which are in place to address a situation and how to report it?
    complianceB: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.7 c) Whether specific trainings are offered to assist employees for maintaining cargo integrity...
    complianceC: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
    // E.5.7 d) Whether supply chain security trainings of employees include the following items?
    complianceD: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true },
      file: { type: String, trim: true, default: null } // "Upload Training Materials"
    },
    // E.5.7 e) Whether the records of security training are maintained and are available for verification...
    complianceE: {
      answer: { type: String, enum: ['Yes', 'No', null], default: null },
      remarks: { type: String, trim: true }
    },
  },

  status: {
    type: String,
    enum: ['draft', 'submitted'],
    default: 'draft',
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
});

export const safetySecurityModel = mongoose.model('SafetySecurity', SafetySecuritySchema);
