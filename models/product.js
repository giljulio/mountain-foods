var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    english_name: {
        type: String,
        index: true
    },
    latin_name: {
        type: String,
        index: true
    },
    description: String,
    price: Number,
    spring: Boolean,
    summer: Boolean,
    winter: Boolean,
    autumn: Boolean
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product: Product
};