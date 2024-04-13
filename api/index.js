const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./models/User");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "fdsjoierwtiewu597978938eijtge934859figfj";

// mongodb+srv://ndubest56:11111234Aa@booking1.qjb5s42.mongodb.net/?retryWrites=true&w=majority&appName=booking1

mongoose.connect(process.env.MONGO_URL);
console.log("THE PROCESS", process.env.MONGO_URL);
app.get("/test", (req, res) => {
  res.json("test okay");
});

app.post("/register", async (req, res) => {
  const details = req.body;
  try {
    const UserDoc = await UserModel.create({
      ...details,
      password: bcrypt.hashSync(details.password, bcryptSalt),
    });
    res.json(UserDoc);
  } catch (e) {
    console.log("Error here", e);
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const details = req.body;
  const userDoc = await UserModel.findOne({ email: details.email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(details.password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json("welcome");
        }
      );
    } else {
      res.json("incorrect password");
    }
  } else {
    res.json("incorrect email");
  }
});

app.listen(4000);
