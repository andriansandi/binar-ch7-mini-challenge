var router = require('express').Router();

// Controllers
const auth = require('../controllers/authController');

router.get('/', auth.dashboard);

// Registrasi
router.get('/register', auth.formRegister);
router.post('/register', auth.doRegister);

// Login
router.get('/login', auth.formLogin);
router.post('/login', auth.doLogin);

module.exports = router;
