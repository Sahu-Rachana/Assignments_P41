const express = require('express');

const usersSignup = require('../controllers/authController');
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", usersSignup.register);
router.post("/login", usersSignup.login);
router.post("/refresh", usersSignup.refresh);
router.delete("/logout", verifyToken, usersSignup.logout); //--> id_deleted == true


module.exports = router; 