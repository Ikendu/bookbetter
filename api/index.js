const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test okay");
});
app.post("/register", (req, res) => {
  const details = req.body;
  res.json(details);
});

app.listen(4000);
