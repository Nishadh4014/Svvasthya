const mongoose = require('mongoose');

const attendantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    availability: {
        startTime: {
            type: Date, // Starting time of the appointment
            required: true
        },
        endTime: {
            type: Date, // Ending time of the appointment
            required: true
        },
        fullAddress: {
            type: String,
            required: true

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
        }
    },
    assignedAppointments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    rating: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Attendant = mongoose.model('Attendant', attendantSchema);

module.exports = Attendant;
