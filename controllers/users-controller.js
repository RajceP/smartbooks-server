import userModel from '../models/user-model.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * Function taking care of user registration.
 * @param {Request} req
 * @param {Response} res
 */
const registerUser = async (req, res) => {
  try {
    let { email, password, username } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .send({ message: 'There is already account associated with this email.' });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      _id: new mongoose.Types.ObjectId(),
      email,
      password: passwordHash,
      username,
    });

    const savedUser = await newUser.save();

    res.send(savedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of user login.
 * @param {Request} req
 * @param {Response} res
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message: 'Invalid email.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: 'Invalid password.' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 43200 });

    res.send({
      token,
      user: {
        id: user._id,
        username: user.username,
      },
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of user deletion.
 * @param {Request} req
 * @param {Response} res
 */
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteQuery = await userModel.deleteOne({ _id: id });

    res.send(deleteQuery);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of token validation.
 * @param {Request} req
 * @param {Response} res
 */
const token = async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.send(false);
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.send(false);
    }

    const user = await userModel.findById(verified.id);
    if (!user) {
      return res.send(false);
    }

    return res.send(true);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

/**
 * Function taking care of getting user from database.
 * @param {Request} req
 * @param {Response} res
 */
const user = async (req, res) => {
  try {
    const id = req.user;
    const user = await userModel.findById(id);

    res.send({
      username: user.username,
      id: user._id,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export { registerUser, loginUser, deleteUser, token, user };
