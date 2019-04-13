const http = require('http');
const { parse } = require('url');
const bodyParser = require('./body-parser');
const people = require('./routes/people');
const toys = require('./routes/toys');

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

const resources = {
  people,
  toys
};

const app = http.createServer((req, res) => {
  const url = parse(req.url, true);

  res.setHeader('Content-Type', 'application/json');

  res.send = json => res.end(JSON.stringify(json));

  // /people
  // ['', 'people']
  // undefined
  // /people/1234
  // ['', 'people', '1234]
  // '1234'
  const id = url.pathname.split('/')[2];
  req.id = id;

  const resource = url.pathname.split('/')[1];
  const resourceRoutes = resources[resource];

  bodyParser(req)
    .then(body => {
      req.body = body;
      resourceRoutes(req, res)
    });

  // if(url.pathname === '/people' && req.method === 'POST') {
  //   bodyParser(req)
  //     .then(body => {
  //       return People
  //         .create({ name: body.name });
  //     })
  //     .then(createdPerson => {
  //       res.end(JSON.stringify(createdPerson));
  //     });
  // } else if(url.pathname === '/people' && req.method === 'GET') {
  //   People.find()
  //     .then(people => res.end(JSON.stringify(people)));
  // } else if(url.pathname.includes('/people/') && req.method === 'GET') {
  //   // '/people/1234'
  //   // ['', 'people', '1234']
  //   const id = url.pathname.split('/')[2];
  //   People.findById(id)
  //     .then(person => res.end(JSON.stringify(person)));
  // } else if(url.pathname.includes('/people/') && req.method === 'PUT') {
  //   const id = url.pathname.split('/')[2];
  //   bodyParser(req)
  //     .then(body => {
  //       return People.findByIdAndUpdate(id, { name: body.name });
  //     })
  //     .then(person => res.end(JSON.stringify(person)));
  // } else if(url.pathname.includes('/people/') && req.method === 'DELETE') {
  //   const id = url.pathname.split('/')[2];
  //   People.findByIdAndDelete(id)
  //     .then(result => res.end(JSON.stringify(result)));
  // }
});

module.exports = app;
