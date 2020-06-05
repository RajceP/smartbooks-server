import express from 'express';

import {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
} from '../controllers/books-controller.js';
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from '../controllers/employees-controller.js';

const { Router } = express;
const router = Router();

/**
 * All API routes definitions.
 */
router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

router.get('/employees', getEmployees);
router.get('/employees/:id', getEmployee);
router.post('/employees', addEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router;
