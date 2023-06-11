const Order = require('../models/order');

const ValidationError = require('../errors/ValidationError');
const { CREATE_CODE, VALIDATION_ERROR_NAME, ORDER_VALIDATION_ERROR_MESSAGE } = require('../utils/constants');

const createOrder = (req, res, next) => {
  const { ...orderData } = req.body;
  Order.create(orderData)
    .then((clothes) => res.status(CREATE_CODE).send(clothes))
    .catch((err) => {
      if (err.name === VALIDATION_ERROR_NAME) next(new ValidationError(ORDER_VALIDATION_ERROR_MESSAGE));
      else next(err);
    });
};

module.exports = { createOrder };
