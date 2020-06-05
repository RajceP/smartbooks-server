import bookModel from '../models/book-model.js';

/**
 * Function taking care of getting all books from database.
 * @param {Request} req
 * @param {Response} res
 */
const getBooks = async (_req, res) => {
  try {
    const books = await bookModel.find({});

    res.send(books);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of getting specific book from database.
 * @param {Request} req
 * @param {Response} res
 */
const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await bookModel.find({ _id: id });

    res.send(book);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of adding book to database.
 * @param {Request} req
 * @param {Response} res
 */
const addBook = async (req, res) => {
  try {
    const book = req.body;
    const addQuery = await bookModel.create(book);

    res.send(addQuery);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of updating book information in database.
 * @param {Request} req
 * @param {Response} res
 */
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = req.body;
    const updateQuery = await bookModel.updateOne({ _id: id }, updateInfo);

    res.send(updateQuery);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of deleting book from dateabase.
 * @param {Request} req
 * @param {Response} res
 */
const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteQuery = await bookModel.deleteOne({ _id: id });

    res.send(deleteQuery);
  } catch (e) {
    res.send(e.message);
  }
};

export { addBook, deleteBook, getBook, getBooks, updateBook };
