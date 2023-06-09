const express = require('express');
const { createConnection } = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
const connection = createConnection({
  host: 'localhost', // Replace with your MySQL database host
  user: 'root', // Replace with your MySQL username
  password: 'Sarun@123', // Replace with your MySQL password
  database: 'youtube' // Replace with your MySQL database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/getvideo', (req, res) => {
  const query = 'SELECT * FROM video'; // Modify the query based on your requirements

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing the query: ', err);
      res.status(500).send('An error occurred');
      return;
    }

    res.json(results);
  });
});

app.listen(1000, () => {
  console.log('Server started on port 1000');
});
