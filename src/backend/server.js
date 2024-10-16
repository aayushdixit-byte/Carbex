const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const db = require('./database')
// const path = require('path');

const app = express();
const port = 5050;

app.use(cors())
app.use(express.json())
// const db = new sqlite3.Database('./products.db');


// API endpoint to fetch products
app.get('/', (req, res) => {
  
  db.all('SELECT * FROM products', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });

});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


