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
        type: [{ 
            startTime: Date,  // Combined date and time for when availability starts
            endTime: Date,    // Combined date and time for when availability ends
            address: String
        }],
        required: true
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
