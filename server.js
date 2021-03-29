
//Imported npm packages that will use to give our server useful functionality
const express = require('express');
const fs = require('fs');

// Installing npm install uuid
const uuid = require('uuid');

// Tells node that I am creating an "express" server
const app = express();

// Sets port
const PORT = process.env.PORT || 4040;

// Sets up the express app to handle data parsing called middle ware. 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes give my server a "map" of how to respond when users visit or request data from various URLs.
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

// Listner
app.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
