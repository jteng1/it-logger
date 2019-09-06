const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

// Load env
dotenv.config({ path: './config.env' });

// Initialize express
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define PORT
const PORT = process.env.PORT || 8000;

// Server Listen
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Define Routes
app.use('/api/logs', require('./routes/logs'));
app.use('/api/techs', require('./routes/techs'));
