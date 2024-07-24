const User = require('../models/User');


// fetch all the available attendants
exports.getAvailableAttendants = async (req, res) => {
    const { dateTime } = req.body;
  
    try {
        const availableAttendants = await User.find({
            status: true,
            availableFrom: { $lte: dateTime },  // Attendant is available from this time or earlier
            availableTo: { $gte: dateTime }     // Attendant is available until this time or later
          });
      
        res.json(availableAttendants);
    } catch (error) {
        console.error('Error fetching available attendants:', error);
        throw error;
    }
}