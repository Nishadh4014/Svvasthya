// routes/attendantRoutes.js
const express = require('express');
const router = express.Router();
const attendantController = require('../controllers/attendantController');
const authMiddleware = require('../middlewares/authMiddleware');

// Login Attendant
router.post('/login', attendantController.loginAttendant);

// Update Availability
router.put('/availability', attendantController.updateAvailability);

// Get Availability
router.get('/fetchavailability', attendantController.getAvailability);

// Assign Appointment
router.post('/appointments/:attendantId', attendantController.assignAppointment);

router.get('/assignedAppointments', authMiddleware, attendantController.getAssignedAppointments);

// Get Directions
router.post('/get-directions',  attendantController.getDirections);

// Route to get OAuth access token
router.post('/authtoken', attendantController.fetchAccessToken);


module.exports = router;
