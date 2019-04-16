const express = require('express');
const app = express();

app.use(express.json());

app.use('/tweets', require('./routes/tweets'));

module.exports = app;
