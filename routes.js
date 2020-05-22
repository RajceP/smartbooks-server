const express = require('express');
const router = express.Router();
const {
  getBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
} = require('./src/controllers/books-controller');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/books', getBooks);
router.get('/books/:isbn', getBook);
router.post('/books', addBook);
router.put('/books/:isbn', updateBook);
router.delete('/books/:isbn', deleteBook);

module.exports = router;
