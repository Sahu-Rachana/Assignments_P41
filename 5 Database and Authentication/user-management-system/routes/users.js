const express = require('express');

const userController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// All can access this router
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "Welcome User"});
});
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);
router.post("/create", userController.addUser);
router.put("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

module.exports = router; 