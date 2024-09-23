// controllers/attendantController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Attendant = require('../models/Attendant');
const Appointment = require('../models/Appointment');
const { v4: uuidv4 } = require('uuid');
require("dotenv").config({ path: "backend/config/config.env" });


// Helper function to generate JWT
const generateToken = (attendantId) => {
    return jwt.sign({ _id: attendantId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Function to log in an attendant
exports.loginAttendant = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if attendant exists
        const attendant = await Attendant.findOne({ email });
        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }

        // Check password
        // const isMatch = await bcrypt.compare(password, attendant.password);
        const isMatch = (password === attendant.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate and return token
        const token = generateToken(attendant._id);
        // Set token in HttpOnly cookie (expires in 7 days)
        res.cookie('token', token, {
            httponly: false,  // Prevents client-side JS from accessing the cookie
            secure: false,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to update availability
exports.updateAvailability = async (req, res) => {
    try {
        const { email, availability } = req.body;

        // Find and update the attendant
        const attendant = await Attendant.findOneAndUpdate(
            { email: email },
            { $set: { availability: availability } },
            { new: true, runValidators: true }
        );

        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }
        res.status(200).json({ message: 'Availability updated successfully', availability: attendant.availability });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};


// Function to get availability for an attendant
exports.getAvailability = async (req, res) => {
    try {
        const { email } = req.query;

        const attendant = await Attendant.findOne({ email: email });
        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }

        res.status(200).json(attendant.availability);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to assign an appointment to an attendant
exports.assignAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.body;
        const { attendantId } = req.params;

        const attendant = await Attendant.findById(attendantId);
        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }

        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        attendant.assignedAppointments.push(appointmentId);
        await attendant.save();

        res.status(200).json({ message: 'Appointment assigned successfully', assignedAppointments: attendant.assignedAppointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to get assigned appointments for the logged-in attendant
exports.getAssignedAppointments = async (req, res) => {
    try {
        // Extract attendant ID from the JWT token (req.user is set by the auth middleware)
        const attendantId = req.user._id;

        // Find the attendant by their ID and populate assigned appointments
        const attendant = await Attendant.findById(attendantId).populate('assignedAppointments');

        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }

        // Return the assigned appointments
        res.status(200).json({
            message: 'Assigned appointments fetched successfully',
            assignedAppointments: attendant.assignedAppointments,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Handle accepting an appointment
exports.acceptAppointment = async (req, res) => {
    try {

        const { appointmentId } = req.body;

        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = 'accepted';
        await appointment.save();

        res.status(200).json({ message: 'Appointment accepted successfully', appointment });
    } catch (error) {
        console.error('Error accepting appointment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Handle rejecting an appointment
exports.rejectAppointment = async (req, res) => {
    try {

        const { appointmentId } = req.body;
        const appointment = await Appointment.findById(appointmentId);

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = 'requested';
        await appointment.save();

        res.status(200).json({ message: 'Appointment rejected successfully', appointment });
    } catch (error) {
        console.error('Error rejecting appointment:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



