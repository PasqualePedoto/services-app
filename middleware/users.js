// Load envoirnment variables
const envoirnmentVariables = require("dotenv").config()["parsed"];

// Import all libraries
const express = require("express");

// Import database library (SQLite) and establish database connection  with url database file
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(envoirnmentVariables["URL_DATABASE"]);

// Define router to manage middleware api
const router = express.Router();

router.get("/", (req, res) => {
  res.send(envoirnmentVariables);
});

router.get("/db", (req, res) => {
  db.serialize(() => {
    db.run("CREATE TABLE lorem (info TEXT)");
    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");

    for (let i = 0; i < 10; i++) {
      stmt.run(`Ipsum ${i}`);
    }

    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
      console.log(`${row.id}: ${row.info}`);
    });
  });

  db.close();

  res.send("Tabella aggiunta");
});

module.exports = router;
