require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Evolux-Pro server !" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server running on port :${port}`);
});
