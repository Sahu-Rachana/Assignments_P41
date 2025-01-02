const express = require('express');
const dotenv = require("dotenv").config();
const cookieparser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

const users = require('./routes/users');
const authRoutes = require('./routes/authRoutes');
const managerRoutes = require('./routes/managers');
const superAdminRoutes = require('./routes/superAdmins');

// Routes
app.use('/users', users);
app.use('/auth', authRoutes);
app.use('/manager', managerRoutes);
app.use('/superAdmin', superAdminRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});