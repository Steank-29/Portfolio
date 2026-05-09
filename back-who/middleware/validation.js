// middleware/validation.js
const { body, validationResult } = require('express-validator');

const validateContact = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters')
    .escape(),
  
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  
  body('subject')
    .notEmpty().withMessage('Subject is required')
    .isIn(['Job Opportunity', 'Freelance Project', 'Collaboration', 'Technical Question', 'General Inquiry'])
    .withMessage('Invalid subject selected'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Company name too long')
    .escape(),
  
  body('position')
    .optional()
    .trim()
    .isLength({ max: 100 }).withMessage('Position too long')
    .escape(),
  
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 5000 }).withMessage('Message must be between 10 and 5000 characters')
    .escape(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }
    next();
  }
];

module.exports = { validateContact };