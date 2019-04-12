const http = require('http');
const uuid = require('uuid/v4');
const { getCharacter } = require('./service/rickAndMortyApi');
const bodyParser = require('./body-parser');
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

const notes = {};
const app = http.createServer((req, res) => {
  res.send = json => res.end(JSON.stringify(json));

  const url = parse(req.url, true);

  res.setHeader('Content-Type', 'application/json');
  if(url.pathname === '/note' && req.method === 'POST') {
    const id = uuid();
    bodyParser(req)
      .then(json => {
        notes[id] = { ...json, id };
        res.send(notes);
      });
  } else if(url.pathname.includes('/character/')) {
    const id = url.pathname.split('/')[2];
    getCharacter(id)
      .then(character => res.send(character));
  }
});

module.exports = app;
