const request = require('superagent');

request
  .get('http://url')
  .then(res => {
    res.body;
  });
