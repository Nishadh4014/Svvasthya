// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin login
router.post('/login', adminController.login);

// Get all appointments (authenticated admin only)
router.get('/appointments', adminController.getAllAppointments);

// Assign attendant to an appointment (authenticated admin only)
router.post('/assign-attendant', adminController.assignAttendant);

module.exports = router;
