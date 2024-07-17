const { default: mongoose } = require("mongoose");
const { type } = require("os");

const AppointmentSchema = new mongoose.Schema({

    user_id: {
        type: String
    },
    attendant_id: {
        type: String
    },
    date: {
        type: Date
    },
    category: {
        type: String
    },
    status: {
        type: String
    },
    report: {
        type: String       // report id
    },
    created_at: {
        type: Date
    },
    updated_at: {
        type: Date
    }

});

module.exports = mongoose.model('Appointment',AppointmentSchema)
