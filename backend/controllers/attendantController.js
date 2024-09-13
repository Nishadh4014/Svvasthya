// controllers/attendantController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Attendant = require('../models/Attendant');
const Appointment = require('../models/Appointment');

// Helper function to generate JWT
const generateToken = (attendantId) => {
    return jwt.sign({ _id: attendantId }, process.env.JWT_SECRET, { expiresIn: '1h' });
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
        const isMatch = await bcrypt.compare(password, attendant.password);
        // const isMatch = (password === attendant.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate and return token
        const token = generateToken(attendant._id);
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

// Function to get all assigned appointments for an attendant
exports.getAssignedAppointments = async (req, res) => {
    try {
        const { attendantId } = req.params;

        const attendant = await Attendant.findById(attendantId).populate('assignedAppointments');
        if (!attendant) {
            return res.status(404).json({ message: 'Attendant not found' });
        }

        res.status(200).json(attendant.assignedAppointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
