var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
    english_name: {
        type: String,
        index: true
    },
    latin_name: {
        type: String,
        
    }
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Product: Product
}