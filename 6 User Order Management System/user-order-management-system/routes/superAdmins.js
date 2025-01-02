const express = require('express');

const superAdminController = require('../controllers/users');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this router
router.get("/", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Welcome Super Admin"});
});
router.get('/', verifyToken, authorizeRoles("admin"), superAdminController.getSuperAdmin);
router.get('/:id', verifyToken, authorizeRoles("admin"), superAdminController.getSuperAdminById);
router.post("/create", verifyToken, authorizeRoles("admin"), superAdminController.addSuperAdmin);
router.put("/update/:id", verifyToken, authorizeRoles("admin"), superAdminController.updateSuperAdmin);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin"), superAdminController.deleteSuperAdmin);

module.exports = router; 