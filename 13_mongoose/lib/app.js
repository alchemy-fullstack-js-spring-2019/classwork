const express = require('express');
const app = express();
const mongoConnection = require('./middleware/mongo-connection');

app.use(require('morgan')('tiny', {
  skip: () => process.env.NODE_ENV === 'test'
}));

app.use(express.json());

app.use('/api/v1/warehouses', mongoConnection, require('./routes/warehouses'));
app.use('/api/v1/employees', mongoConnection, require('./routes/employees'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
