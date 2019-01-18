const stripe = require(`../../../../config/stripe.js`);

const getAllCustomer = async context => {  // maybe check user role
  await stripe.customers.list(
    { limit: 100 })
    .then(customers => {
      context.result = customers;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get full plans errors`);
    });
};

module.exports = { getAllCustomer };