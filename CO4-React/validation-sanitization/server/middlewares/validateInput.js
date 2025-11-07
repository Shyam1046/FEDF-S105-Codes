// server/middlewares/validateInput.js
const { body, validationResult } = require("express-validator");

// Validation and sanitization rules
const validateUserInput = [
  // Validate and sanitize 'name'
  body("name")
    .trim() // remove extra spaces
    .escape() // remove HTML/script tags
    .notEmpty().withMessage("Name is required")
    .isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),

  // Validate and sanitize 'email'
  body("email")
    .trim()
    .normalizeEmail()
    .isEmail().withMessage("Please enter a valid email"),

  // Final middleware to handle errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return all validation errors
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Continue if no errors
  },
];

module.exports = validateUserInput;