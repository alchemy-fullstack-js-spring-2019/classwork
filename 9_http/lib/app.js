const http = require('http');
const request = require('superagent');
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
  res.send = json => res.end(JSON.stringify(json));

  const url = parse(req.url, true);
  console.log(url);

  if(url.pathname.includes('/character/')) {
    const id = url.pathname.split('/')[2];
    console.log(id);
    request
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => ({
        name: res.body.name,
        status: res.body.status,
        species: res.body.species
      }))
      .then(character => res.send(character));
  }
});

module.exports = app;
