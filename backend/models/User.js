const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true
    },
    otp: String,
    otpExpires: Date,
    passwordHash: String,
    categories: [
        {
            type: String,
            required: true
        }
    ],
    status: {
        type: Boolean
    },
    rating: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    education: {
        highestQualification: {
            degree: String,
            institute: String,
            yearOfCompletion: String
        }
    },
    certifications: [{
        certificationName: String,
        issuingOrganization: String,
        yearOfCertification: String
    }],
    experience: [{
        OrganizationName: String,
        role: String,
        duration: String,
        type: String, // Description of medical experience, e.g., "5+ years in elderly care"
    }],
    skills: {
        coreCompetencies: [String],
        specialSkills: [String], // Medical skills relevant to caregiving
        additionalTraining: String
    },
    languagesKnown: [String],
    backgroundCheck: {
        status: {
            type: String,
            enum: ['Pending', 'Approved', 'Rejected']
        },
        details: String // Additional details related to background check
    },

    references: [{
        name: String,
        contactNumber: String,
        relationship: String
    }],
    profilePicture: {
        type: String // URL or path to the profile picture
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    },
    appointments: [
        {
            type: String         // appointment id
        }
    ],
    payments: [
        {
            type: String          // transaction ids
        }
    ]
});

module.exports = mongoose.model('User', UserSchema);
