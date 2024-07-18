const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const authService = require('../services/authService');
const { send_otp, verify_otp, signup, login } = require('../controllers/authController');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// Generate and send OTP
router.route("/send-otp").post(send_otp);

// Verify OTP
router.route("/verify-otp").post(verify_otp);

// Signup with password
router.route("/signup").post(signup);

// login
router.route("/login").post(login);

module.exports = router;

