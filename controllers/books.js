const express = require('express');
const router = express.Router();

const Book = require('../models/books.js')

router.get('/', async (req, res) => {
  try {
    const books = await Book.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// CREATE
router.post('/', async (req, res) => {
  try {
    const newBook = await Book.create(req.body)
    res.status(200).json(newBook)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteBook)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// EDIT
router.put('/:id', async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updateBook)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})









module.exports = router;
