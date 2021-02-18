/**
 * Init env variables
 */
require('dotenv').config();

/**
 * Products
 */
const productsData = require('./data/products');

/**
 * Connect to database config
 */
const connectDB = require('./config/db');
connectDB();

/**
 * Model
 */
const Product = require('./models/Product');

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data imported");
        process.exit();
    }
    catch (error){
        console.error('Error in the import');
        process.exit(1);
    }
}

importData();