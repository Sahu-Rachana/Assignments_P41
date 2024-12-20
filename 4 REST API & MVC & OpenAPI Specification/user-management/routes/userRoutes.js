const path = require('path');

const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUser);
router.post("/create", userController.addUser);
router.put("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);

module.exports = router;