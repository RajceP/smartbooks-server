import customerModel from '../models/customer-model.js';
import mongoose from 'mongoose';

/**
 * Function taking care of getting all the customers from database.
 * @param {Request} req
 * @param {Response} res
 */
const getCustomers = async (_req, res) => {
  try {
    const customers = await customerModel.find({});

    res.send(customers);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of getting specific customer from database.
 * @param {Request} req
 * @param {Response} res
 */
const getCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await customerModel.find({ _id: id });

    res.send(customer);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of adding customer to database.
 * @param {Request} req
 * @param {Response} res
 */
const addCustomer = async (req, res) => {
  try {
    const customer = req.body;
    customer._id = new mongoose.Types.ObjectId();
    const addQuery = await customerModel.create(customer);

    res.send(addQuery);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of updating customer.
 * @param {Request} req
 * @param {Response} res
 */
const updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = req.body;
    const updateQuery = await customerModel.updateOne({ _id: id }, updateInfo);

    res.send(updateQuery);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of deleting customer from dateabase.
 * @param {Request} req
 * @param {Response} res
 */
const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteQuery = await customerModel.deleteOne({ _id: id });

    res.send(deleteQuery);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export { getCustomers, getCustomer, addCustomer, updateCustomer, deleteCustomer };
