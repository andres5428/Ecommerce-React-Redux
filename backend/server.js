/**
 * Init env variables
 */
require('dotenv').config();

/**
 * Init express dependency
 */
const express = require('express');

/**
 * Connect to database config
 */
const connectDB = require('./config/db');
connectDB();

/**
 * Import product routes
 */
const productRoutes = require('./routes/productRoutes');

const app = express ();
app.use(express.json());

/**
 * Middleware global para las rutas
 */
app.use('/api/products',productRoutes);

const PORT = process.env.PORT || 5000;

/**
 * Run the server
 */
app.listen(PORT, () => console.log(`Server running in port ${PORT}`))