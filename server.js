const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const connect = require('./db/mongoose');

connect();

const app = express();

// Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(bodyParser.json());

// Routes
app.use('/api/v1', require('./routes'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servers stated at http://localhost:${port}`)
});
