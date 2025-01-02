const express = require('express');

const usersSignup = require('../controllers/authController');

const router = express.Router();

router.post("/register", usersSignup.register);
router.post("/login", usersSignup.login);
router.post("/refresh", usersSignup.refresh)
//router.get('/protected', usersSignup.protected);


module.exports = router; 