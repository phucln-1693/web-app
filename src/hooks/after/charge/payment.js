const { BadRequest, Conflict, PaymentError } = require(`@feathersjs/errors`);


const payment = async (context, next) => {
  context.result.message = `wish you: happy shopping`;
  return next();
}

module.exports = { payment };