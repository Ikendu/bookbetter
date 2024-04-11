const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

// mongodb+srv://ndubest56:11111234Aa@booking1.qjb5s42.mongodb.net/?retryWrites=true&w=majority&appName=booking1

app.get("/test", (req, res) => {
  res.json("test okay");
});
app.post("/register", (req, res) => {
  const details = req.body;
  res.json(details);
});

app.listen(4000);
