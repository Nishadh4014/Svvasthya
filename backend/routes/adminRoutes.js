// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware'); // For JWT verification, if needed

// Admin login
router.post('/login', adminController.login);

// Get all appointments (authenticated admin only)
router.get('/appointments', authMiddleware, adminController.getAllAppointments);

// Assign attendant to an appointment (authenticated admin only)
router.post('/assign-attendant', authMiddleware, adminController.assignAttendant);

module.exports = router;
