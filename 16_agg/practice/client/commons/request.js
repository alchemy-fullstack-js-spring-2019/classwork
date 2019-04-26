const request = require('superagent');

const BASE_URL = process.env.BASE_URL;

const agent = request.agent();

const makeRequest = (url, method, body) => {
  const req = agent[method.toLowerCase()](`${BASE_URL}${url}`);
  if(body) {
    req.send(body);
  }
  return req;
};

module.exports = {
  post: (url, body) => makeRequest(url, 'POST', body),
  get: url => makeRequest(url, 'GET'),
  patch: (url, body) => makeRequest(url, 'PATCH', body),
  delete: url => makeRequest(url, 'delete ')
};
