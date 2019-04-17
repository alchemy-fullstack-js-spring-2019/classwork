const mongoose = require('mongoose');

const dragonTypes = [
  'fire',
  'ice',
  'poison',
  'water',
  'trash',
  'skittles'
];


const dragonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: String,
  type: {
    type: String,
    required: true,
    enum: dragonTypes
  },
  wings: {
    type: Number,
    required: true,
    min: 0,
    validate: {
      validator: function (v) {
        return v % 2 === 0;
      },
      message: props => `${props.value} must be even`
    }
  }
});

module.exports = mongoose.model('Dragon', dragonSchema);
