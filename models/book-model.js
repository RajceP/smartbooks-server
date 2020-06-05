import mongoose from 'mongoose';

/**
 * Book model schema.
 */
const bookSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  isbn: String,
  title: String,
  subtitle: String,
  author: String,
  published: String,
  publisher: String,
  pages: Number,
  description: String,
  website: String,
});

export default mongoose.model('Book', bookSchema);
