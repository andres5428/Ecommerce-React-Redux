/**
 * Init env variables
 */
require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Success");
    }
    catch (error){
        console.error("Mongo Failed");
        process.exit(1); // Exit the server
    }
}

module.exports = connectDB;