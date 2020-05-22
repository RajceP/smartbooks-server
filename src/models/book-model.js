let mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  isbn: String,
  author: String,
  title: String,
});

module.exports = mongoose.model('books', bookSchema);
