const http = require('http');
const { parse } = require('url');

// 200 - ok
// 204 - ok but no content
// 301 - redirect
// 304 - redirect
// 400 - bad request
// 401 - unauthorized
// 403 - forbidden
// 404 - not found
// 500 - internal server error
// 503 - timeout

const app = http.createServer((req, res) => {
  const url = parse(req.url, true);
  console.log(url);

  // good case for switch/case
  if(url.pathname === '/birthday') {
    res.end('Happy Birthday');
  } else if(url.pathname === '') {
    // respond a different way
  } else {
    // respond with not found
    // how do you set the status code to 404
    res.statusCode = 404;
    res.end('Not Found');
  }
});

module.exports = app;
