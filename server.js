const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000;



app.use(express.static('public'));
app.use(express.json());

const booksController = require('./controllers/books.js')
app.use('/books', booksController)





app.listen(port, () => {
  console.log(`...listening on port ${port}`);
});
mongoose.connect('mongodb://localhost:27017/supermeancrud', { useNewUrlParser:true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})
