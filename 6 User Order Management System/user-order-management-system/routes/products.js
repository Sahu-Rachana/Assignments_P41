const express = require('express');

const productController = require('../controllers/products');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get('/', verifyToken, authorizeRoles("admin", "manager", "user"), productController.getProduct);
router.get('/:id', verifyToken, authorizeRoles("admin", "manager", "user"), productController.getProductById);
router.post("/create", verifyToken, authorizeRoles("admin", "manager"), productController.addProduct);
router.put("/update/:id", verifyToken, authorizeRoles("admin", "manager"), productController.updateProduct);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin", "manager"), productController.deleteProduct);

module.exports = router; 