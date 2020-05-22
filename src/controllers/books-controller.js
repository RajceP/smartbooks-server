const bookModel = require('../models/book-model');

const getBooks = async (req, res) => {
  const books = await bookModel.find({});

  res.send(books);
};

const getBook = async (req, res) => {
  const isbn = req.params.isbn;
  const book = await bookModel.find({ isbn: { $eq: isbn } });

  res.send(book);
};

const addBook = async (req, res) => {
  const book = req.body;
  await bookModel.create(book);

  res.send({ message: 'OK' });
};

const updateBook = async (req, res) => {
  const isbn = req.params.isbn;
  const book = await bookModel.findOne({
    isbn: isbn,
  });
  if (book) {
    const updateInfos = await req.body;
    await bookModel.updateOne({ _id: book._id }, updateInfos);

    res.send({ message: 'OK' });
  } else {
    res.send({ message: 'Not OK' });
  }
};

const deleteBook = async (req, res) => {
  const isbn = req.params.isbn;
  await bookModel.deleteOne({ isbn: isbn });

  res.send({ message: 'OK' });
};

module.exports = { getBooks, getBook, addBook, updateBook, deleteBook };
