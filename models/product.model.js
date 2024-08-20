const { default: mongoose } = require("mongoose");
const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    quantity: Number,
    total: Number,
    discountPercentage: Number,
    discountedTotal: Number,
    thumbnail: String
    })
const Product = mongoose.model("Product",productSchema, "products")

module.exports = Product;