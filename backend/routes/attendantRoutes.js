// routes/attendantRoutes.js
const express = require('express');
const router = express.Router();
const attendantController = require('../controllers/attendantController');


// Login Attendant
router.post('/login', attendantController.loginAttendant);

// Update Availability
router.put('/availability', attendantController.updateAvailability);

// Get Availability
router.get('/fetchavailability', attendantController.getAvailability);

// Assign Appointment
router.post('/appointments/:attendantId', attendantController.assignAppointment);

// Get Assigned Appointments
router.get('/appointments/:attendantId', attendantController.getAssignedAppointments);

module.exports = router;
