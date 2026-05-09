// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// MongoDB Connection (temporarily comment out if not ready)
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB Connected');
    } else {
      console.log('⚠️ MongoDB URI not provided, skipping database connection');
    }
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
  }
};

// Routes (comment out if routes don't exist yet)
try {
  const contactRoutes = require('./routes/contact');
  app.use('/api/contact', contactRoutes);
} catch (error) {
  console.log('⚠️ Contact routes not yet created');
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// 404 handler - FIXED: removed the problematic '*'
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// Connect to database and start server
const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`📧 Email service: Ready`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
  // Still start server even without database
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} (without database)`);
  });
});