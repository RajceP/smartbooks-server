const express = require('express');
const cors = require('cors');

const db = require('./src/database/db');
const books = require('./routes');

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());

app.use('/api', books);

app.listen(process.env.PORT || 3002, function () {
  console.log('server running on port 3002');
});
