// controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Appointment = require('../models/Appointment');
const Attendant = require('../models/Attendant');

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email });
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        const validPassword = await bcrypt.compare(password, admin.password);
         // const isvalidPassword = (password === attendant.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ _id: admin._id, role: admin.role }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find(); // Adjust query if needed
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Fetch available attendants for a given time slot
exports.fetchAvailableAttendants = async (req, res) => {
    const { startTime, endTime } = req.body;
    try {
        const availableAttendants = await Attendant.find({
            availability: {
                $elemMatch: {
                    startTime: { $lte: startTime },
                    endTime: { $gte: endTime },
                },
            },
        });

        if (availableAttendants.length === 0) {
            return res.status(404).json({ message: 'No attendants available for the given time slot' });
        }

        res.json({ availableAttendants });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Assign an attendant to an appointment
exports.assignAttendant = async (req, res) => {
    const { appointmentId, attendantId } = req.body;
    try {
        const appointment = await Appointment.findById(appointmentId);
        const attendant = await Attendant.findById(attendantId);

        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        if (!attendant) return res.status(404).json({ message: 'Attendant not found' });

        // Assign the attendant to the appointment
        appointment.assignedAttendant = attendant._id;
        await appointment.save();

        res.json({ message: 'Attendant assigned successfully', attendant });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};