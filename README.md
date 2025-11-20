# Database Connection

This script can be used to check connection to a database and receive data from it.

## To run this script

1. Create a `.env` file, containig the database credentials
2. `npm install`
3. `node dbcon.js`

## Using the SQL query functions

These are examples of how the created functions can be used to read and write from and to the database.

Reading data from database:

```javascript
const data = await getUsers();
console.log("users :>> ", data);
```

Writing/inserting data to database:

```javascript
// Example of creating a new user
const newUser = await createUser(
  "john.doe@domain",
  "John",
  "Doe",
  "HASH",
  "Employee",
  "Active",
  "Networks"
);
console.log(newUser); // see changes such as id created
```

## Potential structure

This can be the potential structure.

```bash
node/
|-- db/
|   |-- dbcon.js
|   |-- user.js
|   |-- # other files like user.js for specific tables
|-- routes/
|   |-- # (express?) routes to use the database files
```
