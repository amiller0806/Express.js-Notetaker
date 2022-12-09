const app = require('express').Router();
let notes = require('../db/db.json');
const fs = require('fs');
const {
    match
} = require('assert');

app.get('/api/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notes);


});



app.post('/api/notes', (req, res) => {
    let newNote = {
        ...req.body,
        id: Math.floor(Math.random() * 100000),
    }
    console.log(newNote);
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), function (err, data) {
        if (err) throw err;
    });
    res.json(notes);


});


app.post('/api/notes/:id', (req, res) => {
    let tempNotesList = [];

    notes.forEach(function (myNote) {
        if (myNote.id == req.params.id) {
            tempNotesList.push(myNote);
        }
    });
    notes = tempNotesList;


    fs.writeFileSync('./db/db.json', JSON.stringify(notes), function (err, data) {
        if (err) throw err;
    });
    res.json(notes);


});

module.exports = app;