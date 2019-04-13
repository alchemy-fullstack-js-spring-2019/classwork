const Toy = require('../models/Toys');

function post(req, res) {
  Toy
    .create({ type: req.body.type, color: req.body.color })
    .then(toy => res.send(toy));
}


const methods = {
  post
};

module.exports = (req, res) => {
  methods[req.method.toLowerCase()](req, res);
};
