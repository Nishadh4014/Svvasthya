const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // For generating unique appointment IDs

const AppointmentSchema = new mongoose.Schema({
    appointmentID: {
        type: String,
        unique: true,
        default: uuidv4, // Generates a unique ID
    },
    typeOfService: {
        type: String, // e.g., 'Nursing', 'Physiotherapy'
        required: true
    },
    duration: {
        type: Number, // Duration in hours
        required: true
    },
    startTime: {
        type: Date, // Starting time of the appointment
        required: true
    },
    endTime: {
        type: Date, // Ending time of the appointment
        required: true
    },
    address: {
        fullAddress: {
            type: String,
            required: true
        },
        houseNumber: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    location: {
        latitude: {
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        }
    },
    assignedAttendant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendant',
        default: null // Initially null until an attendant is assigned
    },
    requestByCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
