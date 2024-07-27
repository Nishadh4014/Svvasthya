const Partner = require("../models/Partner");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req,res,next) => {
    try {
        const {token} = req.cookies;

        if(!token) {
            return res.status(401).json({
                message: "Please login first",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.partner = await Partner.findById(decoded._id);

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
} 