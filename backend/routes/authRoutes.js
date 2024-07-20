const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const authService = require('../services/authService');
const { send_otp, verify_otp, login, signup_kyc, signup_basic_details } = require('../controllers/authController');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// Generate and send OTP
router.route("/send-otp").post(send_otp);

// Verify OTP
router.route("/verify-otp").post(verify_otp);

// Signup page 1 api
router.route("/complete_kyc").post(signup_kyc);

// Signup page 2 api
router.route("/signup/:id").post(signup_basic_details);

// login
router.route("/login").post(login);

module.exports = router;

