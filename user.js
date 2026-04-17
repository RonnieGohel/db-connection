/**
 * Ignore this file
 * used for other tests
 */
const pool = require("./dbcon");

/**
 * Create a new user in the database
 * @param {string} email Email of the new user
 * @param {string} forename First name
 * @param {string} surname Surname of user
 * @param {string} password_hash Hashed password
 * @param {string} user_type Type of user
 * @param {string} employee_status Status of user
 * @param {string} speciality Speciality of user
 * @returns
 */
async function createUser(
  email,
  forename,
  surname,
  password_hash,
  user_type,
  employee_status,
  speciality,
) {
  const result = await pool.query(
    `
    INSERT INTO team06db.User (email, forename, surname, password_hash, user_type, employee_status, speciality)
    VALUES (?, ?, ?, ?, ?, ?, ?);
    `, // query doesn't contain values to prevent SQL injection attacks
    [
      email,
      forename,
      surname,
      password_hash,
      user_type,
      employee_status,
      speciality,
    ], // set of values to be passed to the SQL query
  );
  return result[0]; // TODO change to only return ID of new row
}

/**
 * Get all columns about all users in the database
 * @returns Array containing objects with the data
 */
async function getAllAboutUsers() {
  const result = await pool.query(`
    SELECT *
    FROM team06db.User;`); // array with 2 arrays, first containing the db data
  const data = result[0];
  return data;
}

/**
 * Get all emails from the User table in the database
 * @returns
 */
async function getAllEmails() {
  const result = await pool.query(
    `
    SELECT email
    FROM team06db.User;
    `,
  );
  return result[0]; // first element contains data
}

module.exports = { createUser, getAllAboutUsers, getAllEmails };
