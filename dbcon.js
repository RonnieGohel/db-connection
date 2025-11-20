import mysql from "mysql2"; // using mysql2 the updated library
import dotenv from "dotenv"; // to use .env files
dotenv.config(); // set up the environment variables from .env file

/**
 * Creating the database connection to be reused in different files
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10, // maximum number of connections to be made at once
  queueLimit: 0, // max number of connection requests to queue, 0 means no limit
});

module.exports = pool;
