const express = require('express');
const app = express();
const tweetsRoutes = require('./routes/tweets');

// Express Middleware
// Between an incoming request
// and an outgoing response
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Body Parser
app.use(express.json());

// if http://localhost:7890/tweets
// go to tweetsRoutes
app.use('/tweets', tweetsRoutes);

app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
});

module.exports = app;
