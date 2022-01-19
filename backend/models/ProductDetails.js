const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product_name: String,
    product_description: String,
    product_price: String,
    product_address:String,
});

module.exports =  mongoose.model('products', ProductSchema);