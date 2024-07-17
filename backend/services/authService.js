const User = require('../models/User');
const Otp = require('../models/Otp');
const otpService = require('./otpService');
const bcrypt = require('bcrypt');

exports.signup = async (mobileNumber) => {
    let user = await User.findOne({ mobileNumber });

    if (!user) {
        user = new User({ mobileNumber });
        await user.save();
    }

    const otp = otpService.generateOtp();
    await otpService.saveOtp(mobileNumber, otp);
    await otpService.sendOtp(mobileNumber, otp);

    return { message: 'OTP sent successfully' };
};

exports.verifyOtp = async (mobileNumber, otp) => {
    const validOtp = await Otp.findOne({ mobileNumber, otp });

    if (!validOtp) {
        throw new Error('Invalid OTP');
    }

    await User.updateOne({ mobileNumber }, { isVerified: true });
    await Otp.deleteOne({ mobileNumber, otp });

    return { message: 'Mobile number verified successfully' };
};

// Signup with password
exports.signupWithPassword = async (mobileNumber, hashedPassword) => {
    let user = await User.findOne({ mobileNumber });

    if (!user) {
        user = new User({ mobileNumber });
    }

    user.passwordHash = hashedPassword;
    await user.save();

    return { message: 'Signup successful' };
};