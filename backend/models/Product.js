const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    precio: {
        type: Number,
        required:true
    },
    referencia: {
        type: String,
        required:true
    },
    foto: {
        type: String,
        required:true
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;