const authService = require('../services/authService');


// send OTP
exports.send_otp = async (req, res) => {
    const { mobileNumber } = req.body;

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60000); 

    try {
        let user = await User.findOne({ mobileNumber });

        if (!user) {
            user = new User({ mobileNumber });
        }

        user.otp = otp;
        user.otpExpires = otpExpires;

        await user.save();

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

    const { mobileNumber, otp } = req.body;

    try {
        const user = await User.findOne({ mobileNumber });

        if (!user) {
            return res.status(400).send('User not found');
        }

        if (user.otp !== otp || user.otpExpires < new Date()) {
            return res.status(400).send('Invalid or expired OTP');
        }

        user.otp = null;
        user.otpExpires = null;
        await user.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error verifying OTP' });
    }

};

// signup with password
exports.signup = async (req, res) => {
    const { mobileNumber, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await authService.signupWithPassword(mobileNumber, hashedPassword);
        res.status(201).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error signing up' });
    }
};

// login
exports.login = async (req, res) => {
    const { mobileNumber, password } = req.body;
  
    try {
      const user = await User.findOne({ mobileNumber });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid mobile number or password' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid mobile number or password' });
      }
  
      // At this point, authentication is successful
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}




