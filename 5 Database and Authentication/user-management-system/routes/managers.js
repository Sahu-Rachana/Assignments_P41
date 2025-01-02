const express = require('express');

const userController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Both admin and manager can access this router
router.get("/", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.json({message: "Welcome Manager"});
});

module.exports = router; 