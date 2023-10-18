const { UserModel } = require("../Model/user.model");
const express = require("express");

const userRouter = express.Router();

userRouter.post("/add", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    const new_user = await user.save();
    res.status(200).send({ "msg": "Added the new user successfully", "new_user_data": new_user });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find(req.query);
    res.status(200).send(users);
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

userRouter.patch("/update/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate({ _id: userID }, req.body);
    res.status(200).send({ "msg": updatedUser });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

userRouter.delete("/delete/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const deletedUser = await UserModel.findByIdAndDelete({ _id: userID }, req.body);
    res.status(200).send({ "msg": "deleted user successfully", "user_data": deletedUser });
  }
  catch (err) {
    res.status(400).send({ "error": err });
  }
});

module.exports = { userRouter };