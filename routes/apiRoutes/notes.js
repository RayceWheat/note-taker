const router = require('express').Router();
const { addNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);    
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of array will be 
    req.body.id = notes.length.toString();

    const note = addNewNote(req.body, notes);
    res.json(note);
});

module.exports = router;