module.exports = req => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const json = JSON.parse(body.toString());
      resolve(json);
    });

    req.on('error', err => {
      reject(err);
    });
  });
};
