// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config();

const app = express();

// CORS configuration - Allow multiple frontend URLs
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'https://portfolio-sami-tawny.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean); // Remove undefined values

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      console.warn(`Origin ${origin} not allowed by CORS`);
      return callback(null, false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging (exclude health checks to keep logs clean)
app.use((req, res, next) => {
  if (req.path !== '/health' && req.path !== '/api/health') {
    console.log(`${req.method} ${req.url}`);
  }
  next();
});

// MongoDB Connection
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

// Routes
try {
  const contactRoutes = require('./routes/contact');
  app.use('/api/contact', contactRoutes);
  console.log('✅ Contact routes loaded');
} catch (error) {
  console.log('⚠️ Contact routes not yet created:', error.message);
}

// ============================================
// HEALTH CHECK ENDPOINTS FOR UPTIMEROBOT
// ============================================

// Simple health check (returns 200 OK)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Detailed health check with server info
app.get('/api/health', (req, res) => {
  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    version: '1.0.0'
  };
  
  res.status(200).json(healthData);
});

// Comprehensive health check for UptimeRobot (returns minimal response for faster checks)
app.get('/uptime', (req, res) => {
  res.status(200).send('alive');
});

// ============================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Route not found' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
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
    console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`📧 Email service: Ready`);
    console.log(`✅ CORS enabled for: ${allowedOrigins.join(', ')}`);
    console.log(`🏥 Health check endpoints:`);
    console.log(`   - /health (simple)`);
    console.log(`   - /api/health (detailed)`);
    console.log(`   - /uptime (UptimeRobot friendly)`);
  });
}).catch((error) => {
  console.error('Failed to connect to database:', error);
  // Still start server even without database
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} (without database)`);
    console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
    console.log(`🏥 Health check endpoints available`);
  });
});