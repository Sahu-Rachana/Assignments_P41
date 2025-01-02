const express = require('express');

const userController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this router
router.get("/", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Welcome Super Admin"});
});

module.exports = router; 