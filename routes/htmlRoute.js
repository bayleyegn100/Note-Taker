
// Path package to get the correct file path for our html

const path = require('path');

// Routing
module.exports = (app) => {
  // HTML GET Requests, handles when users "visit" a page.
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
