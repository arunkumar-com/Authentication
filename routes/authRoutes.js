
const express = require("express");
const { check } = require("express-validator");
const authController = require("../controllers/authControllers");

const router = express.Router();

// Validation rules
const validateRegistration = [
  check("username", "Username is required").notEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({ min: 6 }),
];

const validateLogin = [
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").notEmpty(),
];

// Routes
router.post("/register", validateRegistration, authController.register);
router.post("/login", validateLogin, authController.login);
router.post("/logout", authController.logout); // Added logout route

module.exports = router;