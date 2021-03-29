
// Linking routes to a series of file sources, to hold file on the back end 
// that will be used to store and retrieve notes using the `fs` module

const notes = require('../db/db.json');
const fs = require('fs');

// Routing
module.exports = (app) => {

  // API GET Requests, handles when users visit a page.
  app.get('/api/notes', (req, res) => {
    res.json(notes)
  });

  // API POST Requests, handles when a user submits a note and thus submits data to the server.
  app.post('/api/notes', (req, res) => {
    notes.push(req.body);
    try {
      fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 4))
      res.join(true)
    }
    catch (error) {
      return res.json(error)
    }
  });

  // API DELETE Request, handles deleting out the notes when necessery.
  app.delete('/api/notes/:id', (req, res) => {
    var indexOfNoteToDelete = -1
    // forEach() method executes a provided function once for each array element.
    notes.forEach((note, index) => {
      if (note.id === req.params.id) {
        indexOfNoteToDelete = index;
      }
    });
    // splice() method returns a shallow copy of a portion of an array into a new array object 
    // selected from start to end.
    notes.splice(indexOfNoteToDelete, 1)
    try {
      fs.writeFileSync('./db/db.json', JSON.stringify(notes, null, 4))
      res.json(true)
    }
    catch (error) {
      return res.json(error)
    }
  })
};
