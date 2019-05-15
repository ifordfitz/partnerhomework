const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String},
  synopsis: {type: String},
  wouldRecommend: Boolean
})

const Books = mongoose.model('Book', bookSchema)

module.exports = Books;
