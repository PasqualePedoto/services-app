// Import all library
const express = require("express");

// Create express application and define port (default ip address is localhost)
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Method to execute server:
// **
// **
// * node server.js
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
