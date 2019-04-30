const request = require('superagent');
const { getToken } = require('./state');

const BASE_URL = process.env.BASE_URL;

const makeRequest = (path, method, body) => {
  // request.post('/').set()
  const req = request[method](`${BASE_URL}${path}`)
    .set('Authorization', `Bearer ${getToken()}`);

  if(body) {
    req.send(body);
  }

  return req;
};

module.exports = {
  post: (path, body) => makeRequest(path, 'post', body),
  get: path => makeRequest(path, 'get'),
  patch: (path, body) => makeRequest(path, 'patch', body),
  delete: path => makeRequest(path, 'delete')
};
