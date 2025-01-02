const express = require('express');

const orderController = require('../controllers/orders');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get('/', verifyToken, authorizeRoles("admin", "manager", "user"), orderController.getOrder);
router.get('/:id', verifyToken, authorizeRoles("admin", "manager", "user"), orderController.getOrderById);
router.post("/create", verifyToken, authorizeRoles("admin", "user"), orderController.addOrder);
router.put("/update/:id", verifyToken, authorizeRoles("admin", "user"), orderController.updateOrder);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin", "user"), orderController.deleteOrder);

module.exports = router; 