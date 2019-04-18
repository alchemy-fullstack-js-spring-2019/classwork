const mongoose = require('mongoose');

const itemTypes = [
  'toy',
  'game',
  'food'
];

const itemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: itemTypes
  },
  warehouse: {
    type: mongoose.Types.ObjectId,
    ref: 'Warehouse',
    required: true
  },
  madeOn: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
