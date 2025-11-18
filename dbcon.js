import dotenv from "dotenv"; // to use .env files
import mysql from "mysql2"; // same as const mysql = require("mysql2") -> use the mysql node libary

dotenv.config(); // set up the environment variables from .env file

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
}); // set up database connection with host and db details

const sqlQuery = `SELECT * FROM user`; // sql query in here

connection.query(sqlQuery, async function (err, result) {
  if (err) {
    throw err; // shows if database connection error
  } else {
    const data = await JSON.parse(JSON.stringify(result)); // convert result into JSON
    console.log(data); // show the JSON data
  }
});

// TODO: make this into a function or something that the team can call to use the code here
