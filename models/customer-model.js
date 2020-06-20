import mongoose from 'mongoose';

// Customer model schema.
const customerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  address: String,
  phone: String,
  createdAt: Date,
});

export default mongoose.model('customer', customerSchema);
