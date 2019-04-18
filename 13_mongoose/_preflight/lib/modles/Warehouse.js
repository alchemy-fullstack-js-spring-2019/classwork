const mongoose = require('mongoose');
const states = require('../utils/states');

const warehouseSchema = new mongoose.Schema({
  city: String,
  state: {
    type: String,
    required: true,
    enum: states()
  },
  zipcode: String
});

module.exports = mongoose.model('Warehouse', warehouseSchema);
