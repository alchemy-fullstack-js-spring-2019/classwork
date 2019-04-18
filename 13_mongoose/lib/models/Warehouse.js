const mongoose = require('mongoose');
const states = require('../utils/states');

const warehouseModel = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
    enum: states()
  },
  zipcode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Warehouse', warehouseModel);
