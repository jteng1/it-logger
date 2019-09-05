const express = require('express');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

// Initialize express
const app = express();

// Connect Database

// Init Middleware

// CORS

// Define PORT
const PORT = process.env.PORT || 8000;

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Define Routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/techs', require('./routes/techs'));
