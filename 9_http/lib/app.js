const http = require('http');
const uuid = require('uuid/v4');
const { parse } = require('url');
const bodyParser = require('./body-parser');
const People = require('./models/People');

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

const notes = {};
const app = http.createServer((req, res) => {
  res.send = json => res.end(JSON.stringify(json));

  const withIdPattern = /\/people\/(?<id>[\w-]*)/;

  const url = parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  if(url.pathname === '/people' && req.method === 'POST') {
    bodyParser(req)
      .then(json => {
        return People.create({
          name: json.name,
          age: json.age,
          color: json.color
        });
      })
      .then(createdPerson => res.send(createdPerson));
  } else if(url.pathname === '/people' && req.method === 'GET') {
    People.find()
      .then(people => res.send(people));
    // } else if(url.pathname.includes('/people/')) {
  } else if(withIdPattern.test(url.pathname)) {
    const id = url.pathname.match(withIdPattern).groups.id;
    // const id = url.pathname.split('/')[2];
    People.findById(id)
      .then(person => res.send(person));
  }

  // res.setHeader('Content-Type', 'application/json');
  // if(url.pathname === 'note' && req.method === 'GET') {
  //   res.send(notes);
  // } else if(url.pathname === '/note' && req.method === 'POST') {
  //   const id = uuid();
  //   bodyParser(req)
  //     .then(json => {
  //       notes[id] = { ...json, id };
  //       res.send(notes);
  //     });
  // } else if(url.pathname.includes('/character/')) {
  //   const id = url.pathname.split('/')[2];
  //   getCharacter(id)
  //     .then(character => res.send(character));
  // }
});

module.exports = app;
