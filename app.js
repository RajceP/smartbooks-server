import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import router from './routes/routes.js';

// Set environment variables from .env file.
const { config } = dotenv;
config();

// Initialize express
const app = express();
const { urlencoded, json } = express;

// Initialize connection to MongoDB.
mongoose.connect(process.env.DB || 'mongodb://localhost:27017/smartbooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We are open!');
});

// Use middlewares.
app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());
app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/', router);

// Catch 404 and forward to error handler
app.use((_req, _res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Development error handler. Will print stacktrace.
if (process.env.NODE_ENV === 'development') {
  app.use((err, _req, res) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// Production error handler. No stacktraces leaked to user.
app.use((err, _req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

// Initialize server listening.
app.listen(process.env.PORT || 3002, () => {
  console.log('server listening on port 3002');
});

export default app;
