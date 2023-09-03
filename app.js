// Imported the required module and the instance of express
const express = require('express');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Created a route to render the EJS 
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World!' });
  });

// Started a server on port 3000
var port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });