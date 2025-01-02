const express = require('express');

const managerController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Both admin and manager can access this router
router.get("/", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
    res.json({message: "Welcome Manager"});
});
router.get('/', verifyToken, authorizeRoles("admin", "manager"), managerController.getManager);
router.get('/:id', verifyToken, authorizeRoles("admin", "manager"), managerController.getManagerById);
router.post("/create", verifyToken, authorizeRoles("admin", "manager"), managerController.addManager);
router.put("/update/:id", verifyToken, authorizeRoles("admin", "manager"), managerController.updateManager);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin", "manager"), managerController.deleteManager);

module.exports = router; 