const express = require('express');

const orderController = require('../controllers/orders');
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

const router = express.Router();

router.get('/', verifyToken, authorizeRoles("admin", "manager"), orderController.getOrder);
router.get('/user/:id', verifyToken, authorizeRoles("admin", "manager", "user"), orderController.getOrdersByUserId);
router.get('/order/:id', verifyToken, authorizeRoles("admin", "manager", "user"), orderController.getOrderById);
router.post("/create", verifyToken, authorizeRoles("admin", "user"), orderController.addOrder);
router.post("/add/item/:id", verifyToken, authorizeRoles("admin", "user"), orderController.addOrderItem);
router.patch("/update/quantity/:id", verifyToken, authorizeRoles("admin", "user"), orderController.updateOrderItemQuantity);
router.delete("/delete/item/:id/:itemName", verifyToken, authorizeRoles("admin", "user"), orderController.deleteOrderItem);
router.delete("/delete/:id", verifyToken, authorizeRoles("admin", "user"), orderController.deleteOrder);

module.exports = router; 