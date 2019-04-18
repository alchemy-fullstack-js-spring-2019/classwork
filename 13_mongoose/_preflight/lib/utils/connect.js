const mongoose = require('mongoose');
const { parse } = require('url');

const redact = dbUri => {
  const parsedUri = parse(dbUri);

  const authPart = parsedUri.auth ? '***:***@' : '';

  return `${parsedUri.protocol}//${authPart}${parsedUri.hostname}:${parsedUri.port}${parsedUri.pathname}`;
};

const addEvent = (event, dbUri) => {
  mongoose.connection.on(event, () => {
    // eslint-disable-next-line no-console
    console.log(`Mongodb connection ${event} at ${dbUri}`);
  });
};

module.exports = (dbUri = process.env.MONGODB_URI) => {
  const redactedDbUri = redact(dbUri);
  [
    'open',
    'error',
    'close',
    'disconnected',
    'reconnected'
  ].forEach(event => addEvent(event, redactedDbUri));

  return mongoose.connect(dbUri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  });
};
