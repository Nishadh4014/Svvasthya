const Partner = require('../models/Partner');
const Customer = require('../models/Customer');
const authService = require('../services/authService');
const twilio = require('twilio');
require('dotenv').config({ path: './config/config.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// send OTP
exports.send_otp = async (req, res) => {
    const { mobileNumber, role } = req.body;
    // console.log('Request body:', req.body); 
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60000); 

    try {
        let PartnerOrCustomer;

        // Determine which model to use based on role
        if (role === 'Customer') {
            PartnerOrCustomer = await Customer.findOne({ mobileNumber });
            if (!PartnerOrCustomer) {
                PartnerOrCustomer = new Customer({ mobileNumber });
            }
        } else if (role === 'Partner') {
            PartnerOrCustomer = await Partner.findOne({ mobileNumber });
            if (!PartnerOrCustomer) {
                PartnerOrCustomer = new Partner({ mobileNumber });
            }
        } else {
            return res.status(400).json({ error: 'Invalid role specified' });
        }

        // Set OTP and expiration
        PartnerOrCustomer.otp = otp;
        PartnerOrCustomer.otpExpires = otpExpires;

        await PartnerOrCustomer.save();

        // Send OTP using Twilio
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            to: mobileNumber,
            from: process.env.TWILIO_PHONE_NUMBER
        });

        res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending OTP' });
    }
};

// verify OTP
exports.verify_otp = async (req, res) => {
    const { mobileNumber, otp, role } = req.body;

    try {
        let PartnerOrCustomer;

        // Determine which model to use based on role
        if (role === 'Customer') {
            PartnerOrCustomer = await Customer.findOne({ mobileNumber });
        } else if (role === 'Partner') {
            PartnerOrCustomer = await Partner.findOne({ mobileNumber });
        } else {
            return res.status(400).json({ error: 'Invalid role specified' });
        }

        // Check if userOrCustomer exists
        if (!PartnerOrCustomer) {
            return res.status(400).json({ error: 'Partner or Customer not found' });
        }

        // Verify OTP and expiration
        if (PartnerOrCustomer.otp !== otp ||PartnerOrCustomer.otpExpires < new Date()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        // Clear OTP fields
        PartnerOrCustomer.otp = null;
        PartnerOrCustomer.otpExpires = null;
        await PartnerOrCustomer.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error verifying OTP' });
    }
};

// sign up page 1
exports.signup_kyc = async (req, res) => {
 
    try {

        const { aadharNumber,mobileNumber,password } = req.body;

        let partner = await Partner.findOne({mobileNumber});
        if(partner) {
            return res.status(400).json({
                success: false,
                message: "Attendant already exists"
            });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        // Perform the third party KYC logic here...




        // Create user after OTP verification with these three feilds and make other feilds dummy!!
        partner = await Partner.create({
            
        });

        res.status(200).json({ message: 'KYC verfication succesful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error signing up' });
    }
};

// signup page 2
exports.signup_basic_details = async (req, res) => {
 
    try {

        const { firstname,lastname,email,dob,categories,address,city,state,education,certification,experience,skills,languagesKnown,references} = req.body;

        // find the current user by his request id (will sent through the route)
        // userId, updateData will be defined here...

        
        // update his basic details record
        const result = await Partner.findByIdAndUpdate(userId, updateData, { new: true });
        
        // attendant will be directly logged in after sign up
        const token = await partner.generateToken();
        const options = {
            expires: new Date(Date.now() + 90*24*60*60*1000),
            httponly: true,
        };

        res.status(201).cookie("token",token,options).json({
            success: true,
            user,
            token,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error signing up' });
    }
};

// login
exports.login = async (req, res) => {
    const { mobileNumber, password } = req.body;
  
    try {
      const partner = await Partner.findOne({ mobileNumber });
  
      if (!partner) {
        return res.status(401).json({ error: 'Invalid mobile number or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, partner.passwordHash);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid mobile number or password' });
      }
      
      const token = await partner.generateToken();
        const options = {
            expires: new Date(Date.now() + 90*24*60*60*1000),
            httponly: true,
        };


        res.status(200).cookie("token",token,options).json({
            success: true,
            user,
            token,
        })
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}



