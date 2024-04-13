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



// app.use(cors())
// app.get('/',(req,res)=>{
  //   return res.json('I am listening')
  // })
  
  
  
  // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });
    
    
    // // Serve static files (React build)
    // // app.use(express.static(path.join(__dirname, 'client/build')));