const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require("dotenv").config({path: "backend/config/config.env"});

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

