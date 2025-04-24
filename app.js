const express = require('express');

const cors = require("cors");
const morgan = require("morgan");

const authRoutes = require('./routes/authRoutes');



// parse the request body
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Root Route
app.get("/", (req, res) => {
    res.send("Welcome to the Auth API!");
  });
  
  // Routes
  app.use("/auth", authRoutes);

module.exports = app;