import express from 'express';
import auth from '../middlewares/auth.js';

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
import {
  registerUser,
  loginUser,
  deleteUser,
  token,
  user,
} from '../controllers/users-controller.js';

const { Router } = express;
const router = Router();

// All API routes definitions.
router.post('/users/register', registerUser);
router.post('/users/login', loginUser);
router.delete('/users/delete/:id', auth, deleteUser);
router.post('/users/token', token);
router.get('/users', auth, user);

router.get('/books', auth, getBooks);
router.get('/books/:id', auth, getBook);
router.post('/books', auth, addBook);
router.put('/books/:id', auth, updateBook);
router.delete('/books/:id', auth, deleteBook);

router.get('/employees', auth, getEmployees);
router.get('/employees/:id', auth, getEmployee);
router.post('/employees', auth, addEmployee);
router.put('/employees/:id', auth, updateEmployee);
router.delete('/employees/:id', auth, deleteEmployee);

export default router;
