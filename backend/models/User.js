const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
    },
    otp: String,
    otpExpires: Date,
    passwordHash: String,
});

module.exports = mongoose.model('User', UserSchema);

