const express = require("express"); //helps me build api endpoints
const cors = require("cors"); //helps the react fronend which runs on port 5000 to communicate with backend which runs on port 3000
const mysql = require("mysql2"); //driver that allows node talk to database

const app = express();
app.use(cors());
app.use(express.json());

//connecting the database here in the server js
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asdfghjkl",
  database: "Book_Club",
});

db.connect((err) => {
  if (err) {
    console.error("DB CONNECTION FAILED", err);
    return;
  }

  console.log("DB CONNECTION SUCCESSFUL");
});

//get route to fetch the data from mysql
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM Book_Club";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error Fetching Books");
      return;
    }
    res.json(result);
  });
});

//creating the server on 3000 port
app.listen(3000, (err) => {
  if (err) {
    console.log("Error while creating the server");
    return;
  }
  console.log("Server Created Successfully");
});
