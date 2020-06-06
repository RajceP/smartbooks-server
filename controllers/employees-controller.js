import employeeModel from '../models/employee-model.js';
import mongoose from 'mongoose';

/**
 * Function taking care of getting all the employees from database.
 * @param {Request} req
 * @param {Response} res
 */
const getEmployees = async (_req, res) => {
  try {
    const employees = await employeeModel.find({});

    res.send(employees);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of getting specific employee from database.
 * @param {Request} req
 * @param {Response} res
 */
const getEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await employeeModel.find({ _id: id });

    res.send(employee);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of adding employee to database.
 * @param {Request} req
 * @param {Response} res
 */
const addEmployee = async (req, res) => {
  try {
    const employee = req.body;
    employee._id = new mongoose.Types.ObjectId();
    const addQuery = await employeeModel.create(employee);

    res.send(addQuery);
  } catch (e) {
    res.send(e.message);
  }
};

/**
 * Function taking care of updating employee.
 * @param {Request} req
 * @param {Response} res
 */
const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const updateInfo = req.body;
    const updateQuery = await employeeModel.updateOne({ _id: id }, updateInfo);

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
const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteQuery = await employeeModel.deleteOne({ _id: id });

    res.send(deleteQuery);
  } catch (e) {
    res.send(e.message);
  }
};

export { getEmployees, getEmployee, addEmployee, updateEmployee, deleteEmployee };
