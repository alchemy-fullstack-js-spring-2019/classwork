const http = require('http');
const fsPromises = require('fs').promises;
const { parse } = require('url');
const getRandomQuote = require('./services/futuramaApi');

module.exports = http.createServer((req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/') {
    res.end('My Home Page');
  } else if(/[a-z]/.test(url.pathname)) {
    res.setHeader('Content-Type', 'application/json');
    getRandomQuote()
      .then(quote => res.end(JSON.stringify({ quote })));
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    fsPromises.readFile('../index.html', { encoding: 'utf8' })
      .then(html => res.end(html));
  }
});




const pattern = /hi (?<hi>\w\w\w)a\1/;

'hi theathe'.match(pattern).groups.hi;
