const express = require('express');
const dotenv = require("dotenv").config();
const cookieparser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

const authRoutes = require('./routes/authRoutes');
const users = require('./routes/users');
const managerRoutes = require('./routes/managers');
const superAdminRoutes = require('./routes/superAdmins');
const orders = require('./routes/orders');
const products = require('./routes/products');

// Routes
app.use('/auth', authRoutes);
app.use('/users', users);
app.use('/manager', managerRoutes);
app.use('/superAdmin', superAdminRoutes);
app.use('/orders', orders);
app.use('/products', products);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});