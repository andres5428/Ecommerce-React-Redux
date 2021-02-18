/**
 * Init express dependency
 */
const express = require('express');
/**
 * Use the Router method
 */
const router = express.Router();
/**
 * Imports
 */
const { getAllProducts, getProductById } = require('../controller/productControllers');

/**
 * @description Get all products from database
 * @route GET /api/products/
 */
router.get('/', getAllProducts);

/**
 * @description Get a products from database
 * @route GET /api/products/:id
 */
router.get('/:id', getProductById);

module.exports = router;