// Import all libraries
const express = require("express");
const Users = require("./middleware/users");
const Services = require("./middleware/services");

// Create express application and define port (default ip address is localhost)
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Middleware
app.use("/users", Users);
app.use("/services", Services);

// Method to execute server:
// **
// **
// * node server.js
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
