const { ProductModel } = require("../Model/product.model");
const express = require("express");

const productRouter = express.Router();

productRouter.post("/add", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    const new_product = await product.save();
    res.status(200).send({ "msg": "Added the new product successfully", "new_product_data": new_product });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

productRouter.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find(req.query);
    res.status(200).send(products);
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

productRouter.patch("/update/:productID", async (req, res) => {
  const { productID } = req.params;
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate({ _id: productID }, req.body);
    res.status(200).send({ "msg": updatedProduct });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

productRouter.delete("/delete/:productID", async (req, res) => {
  const { productID } = req.params;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete({ _id: productID }, req.body);
    res.status(200).send({ "msg": "deleted user successfully", "user_data": deletedProduct });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

module.exports = { productRouter };