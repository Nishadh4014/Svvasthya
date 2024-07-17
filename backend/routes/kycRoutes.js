const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to store KYC data
router.post('/submit', async (req, res) => {
    const { mobileNumber, name, dob, address, email } = req.body;

    try {
        // Find the user by mobile number
        let user = await User.findOne({ mobileNumber });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user's KYC data
        user.name = name;
        user.dob = dob;
        user.address = address;
        user.email = email;

        // Save the updated user to the database
        await user.save();

        res.status(201).json({ message: 'KYC data stored successfully', user });
    } catch (error) {
        console.error('Error storing KYC data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;