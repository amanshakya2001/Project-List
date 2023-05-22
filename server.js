const express = require('express');
const { Client } = require('pg');
const app = express();
const ejs = require('ejs');
const port = 3000;

const connection = new Client({
  connectionString: 'postgres://root:J0UqbqGH5JGGBUcwIVnNwSat3civEEPa@dpg-cgqgnmm4dad5es0nv26g-a.oregon-postgres.render.com/dbnotes',
  ssl: {
    rejectUnauthorized: false,
  },
});
connection.connect();


app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    connection.query(`select * from projectslist`,(error, results) => {
        console.log(results.rows)
        res.render('index',{data:results.rows});
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });