const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./products.db');

// Create products table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName TEXT,
    productDescription TEXT,
    productImage TEXT
  )`);

  // Insert sample data
  const stmt = db.prepare('INSERT INTO products (productName, productDescription, productImage) VALUES (?, ?, ?)')      ;
  stmt.run(['Product 1', 'Description of product 1', './Assets/back2.png']);
  // db.run('DELETE FROM PRODUCTS')
  stmt.finalize();
});

// Close the database connection

module.exports = db;
