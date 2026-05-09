// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendAdminEmail, sendAutoReply } = require('../utils/resendService');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, company, position, message } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields'
      });
    }
    
    // Save to database (if MongoDB is connected)
    try {
      const contact = new Contact({ name, email, subject, company, position, message });
      await contact.save();
      console.log('✅ Contact saved to database');
    } catch (dbError) {
      console.log('⚠️ Database not connected, skipping save');
    }
    
    // Send emails via Resend
    await Promise.all([
      sendAdminEmail({ name, email, subject, company, position, message }),
      sendAutoReply({ name, email, subject, message })
    ]);
    
    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

module.exports = router;