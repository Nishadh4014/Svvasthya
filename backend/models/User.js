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
