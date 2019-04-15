const express = require('express');
const app = express();
const tweetsRoutes = require('./routes/tweets');

// Express Middleware
// Between an incoming request
// and an outgoing response
app.use((req, res, next) => {
  // time in ms
  const startAt = Date.now();
  res.on('finish', () => {
    const totalTime = Date.now() - startAt;
    console.log(`[${req.method}] ${req.baseUrl} ${res.statusCode} - ${totalTime}ms`);
  });
  next();
});

// Body Parser
app.use(express.json());

// if http://localhost:7890/tweets
// go to tweetsRoutes
app.use('/tweets', tweetsRoutes);

// eslint-disable-next-line no-unused-vars
app.use(require('./middleware/not-found'));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send({ error: err });
});

module.exports = app;
