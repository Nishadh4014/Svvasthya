const express = require('express');
const router = express.Router();
const { send_otp, verify_otp, login, signup_kyc, signup_basic_details } = require('../controllers/authController');


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

