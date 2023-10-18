const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  item_name: String,
  qty: Number,
}, {
  versionKey: false
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel }