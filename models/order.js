const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name обязательное поле'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'PhoneNumber обязательное поле'],
  },
  color: {
    type: String,
    required: [true, 'Color обязательное поле'],
  },
  type: {
    type: String,
    required: [true, 'Type обязательное поле'],
  },
  fabrics: {
    type: String,
    required: [true, 'Fabrics обязательное поле'],
  },
  height: {
    type: Number,
  },
  bust: {
    type: Number,
  },
  waist: {
    type: Number,
  },
  sleeve: {
    type: Number,
  },
  trousersLength: {
    type: Number,
  },
  booty: {
    type: Number,
  },
}, { versionKey: false });

module.exports = mongoose.model('Order', orderSchema);
