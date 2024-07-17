const authService = require('../services/authService');

exports.signup = async (req, res) => {
    try {
        const { mobileNumber } = req.body;
        const response = await authService.signup(mobileNumber);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    try {
        const { mobileNumber, otp } = req.body;
        const response = await authService.verifyOtp(mobileNumber, otp);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

