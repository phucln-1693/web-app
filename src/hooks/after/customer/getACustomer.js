const stripe = require(`../../../../config/stripe.js`);

const getACustomer = async context => {  // maybe check user authentication
  const { id } = context;
  await stripe.customers.retrieve(id)
    .then(cus => {
      context.result = cus;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get a plan error!`);
    });
};

module.exports = { getACustomer };