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












module.exports = router;
