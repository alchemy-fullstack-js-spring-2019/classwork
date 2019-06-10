const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.end('hi');
});

app.listen(7890, () => {
  console.log('started');
});
