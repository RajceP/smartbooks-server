import mongoose from 'mongoose';

// User model schema.
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  email: String,
  password: String,
});

export default mongoose.model('user', userSchema);
