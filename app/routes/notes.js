const express = require('express')
const router = express.Router()
const Note = require('../models/note')

router.post('/', async(req, res) => {
    const { title, body } = req.body
    const note = new Note({ title: title, body: body, author: req.user._id})
    try {
        await note.save()
        res.json(200).json(note)
    } catch (error) {
        res.status(500).json({error: 'Problem to create a new note.'})
    }
})

module.exports = router