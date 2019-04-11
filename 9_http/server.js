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

http.createServer((req, res) => {
  const url = parse(req.url);
  console.log(url);

  // good case for switch/case
  if(url.pathname === '') {
    // respond one way
  } else if(url.pathname === '') {
    // respond a different way
  } else {
    // respond with not found
    // how do you set the status code to 404
  }
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ name: 'ryan' }));
}).listen(7890);
