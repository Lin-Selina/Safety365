require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to Safety365 Backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

