const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Bearer scheme
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, 'TharaBhaiJogindar', (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' });

        req.user = decoded; // Set user information in req.user
        next();
    });
};

module.exports = authMiddleware;
