const express = require('express');
const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/dragons', require('./routes/dragons'));

module.exports = app;
