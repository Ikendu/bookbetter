const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);

// mongodb+srv://ndubest56:11111234Aa@booking1.qjb5s42.mongodb.net/?retryWrites=true&w=majority&appName=booking1

mongoose.connect(process.env.MONGO_URL);
console.log("THE PROCESS", process.env.MONGO_URL);
app.get("/test", (req, res) => {
  res.json("test okay");
});

app.post("/register", (req, res) => {
  const details = req.body;
  UserModel.create({
    ...details,
    password: bcrypt.hashSync(password, bcryptSalt),
  });
  res.json(details);
});

app.listen(4000);
