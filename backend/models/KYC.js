const { default: mongoose } = require("mongoose");
const { type } = require("os");

const KycSchema = new mongoose.Schema({

    attendant_id: {                              // get it through the req body when the attendant clicks on send otp button
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    aadhar_no: {
        type: String
    },
    otp: {
        type: String
    },
    otpExpires: {
        type: Date
    }

});


