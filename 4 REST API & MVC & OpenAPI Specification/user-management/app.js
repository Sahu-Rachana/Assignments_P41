const path = require('path');
//import path from "path";

const express = require('express');
//import express, { Request, Response } from "express";

const app = express();

//const swaggerJsDoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');

const userRoutes = require('./routes/userRoutes');

//const swaggerOptions = {  }

app.use('/user', userRoutes);

app.listen(3000);