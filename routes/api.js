/**
 * API Routes
 */
const router = require('express').Router()

// Middleware
const jwtAuth = require('../middlewares/jwt-auth');

// Controller 
const apiController = require('../controllers/apiController')

// Users Login
router.post('/users/login', apiController.userLogin);

// Get user details
router.get('/me', jwtAuth, apiController.me);

module.exports = router;