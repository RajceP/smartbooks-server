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
  getCustomers,
  getCustomer,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} from '../controllers/customers-controller.js';
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

router.get('/Customers', auth, getCustomers);
router.get('/Customers/:id', auth, getCustomer);
router.post('/Customers', auth, addCustomer);
router.put('/Customers/:id', auth, updateCustomer);
router.delete('/Customers/:id', auth, deleteCustomer);

export default router;
