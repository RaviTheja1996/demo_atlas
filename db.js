const mongoose = require("mongoose");
require("dotenv").config()

const connection = mongoose.connect(process.env.mongoURL); // cloud db connection
// const connection = mongoose.connect(
//   "mongodb+srv://ayushmaanrajput:Ayushmaan007@cluster0.kadlk1u.mongodb.net/fullstack",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/expressconnect"); //  local db connection

module.exports = { connection };