// Import all libraries
const express = require("express");

// Define router to manage middleware api
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Risponde api 2");
});

module.exports = router;
