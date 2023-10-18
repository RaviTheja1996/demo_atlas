const express = require("express");

const { connection } = require("./db.js");
const { userRouter } = require("./Routes/user.routes");
const { productRouter } = require("./Routes/product.routes");

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);


app.listen(4500, async () => {
  try {
    await connection
    console.log("connected to DB");
    console.log("server is running at port 4500");
  }
  catch (err) {
    console.log(err);
  }
});