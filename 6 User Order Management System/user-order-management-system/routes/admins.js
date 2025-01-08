const express = require('express');

const adminController = require('../controllers/admins');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this router
/*router.get("/", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({message: "Welcome Super Admin"});
});*/
router.get('/', verifyToken, authorizeRoles("admin"), adminController.getAdmin);
router.get('/:id', verifyToken, authorizeRoles("admin"), adminController.getAdminById);
router.post("/create", verifyToken, authorizeRoles("admin"), adminController.addAdmin);
router.put("/update/:id", verifyToken, authorizeRoles("admin"), adminController.updateAdmin);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin"), adminController.deleteAdmin);

module.exports = router; 