const express = require('express');

const userController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// All can access this router
/*router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
    res.json({message: "Welcome User"});
});*/
router.get('/', verifyToken, authorizeRoles("admin", "manager"), userController.getUser);
router.get('/:id', verifyToken, authorizeRoles("admin", "manager", "user"), userController.getUserById);
router.post("/create", verifyToken, authorizeRoles("admin"), userController.addUser);
router.put("/update/:id", verifyToken, authorizeRoles("admin", "user"), userController.updateUser);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin", "user"), userController.deleteUser);

module.exports = router; 