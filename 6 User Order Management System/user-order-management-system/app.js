const express = require('express');
const dotenv = require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRoutes = require('./routes/authRoutes');
const users = require('./routes/users');
const managers = require('./routes/managers');
const admins = require('./routes/admins');
const orders = require('./routes/orders');
const products = require('./routes/products');

// Routes
app.use('/auth', authRoutes);
app.use('/users', users);
app.use('/managers', managers);
app.use('/admins', admins);
app.use('/orders', orders);
app.use('/products', products);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});