const { parse } = require('url');
const mongoose = require('mongoose');


const log = (event, uri) => () => {
  const parsedUri = parse(uri);
  let authPart = '';
  if(parsedUri.auth) {
    authPart = '***:***@';
  }
  const redactedUrl = `${parsedUri.protocol}://${authPart}${parsedUri.hostname}:${parsedUri.port}${parsedUri.pathname}`;
  console.log(`MongoDB connection ${event} at ${redactedUrl}`);
};

module.exports = (uri = process.env.MONGODB_URI) => {
  mongoose.connect('mongodb://localhost:27017/dragons', {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
  });

  ['open', 'error', 'close', 'reconnected'].forEach(event => {
    mongoose.connection.on(event, log(event, uri));
  });
};
