const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const customerModel = {
//   source: `tok_visa` // require
// };

const createCustomer = async context => {
  const { data } = context;
  if (!data.source) throw Error(`${error.INVALID_PARAM}`);
  await stripe.customers.create(data)
    .then(customer => {
      context.result = customer;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = { createCustomer };  