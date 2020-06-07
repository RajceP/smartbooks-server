import mongoose from 'mongoose';

// Employee model schema.
const employeeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  age: Number,
  address: String,
  phone: String,
});

export default mongoose.model('employee', employeeSchema);
