const stripe = require(`../../../../config/stripe.js`);

const getAProd = async context => {  // maybe check user role
  const { id } = context;
  await stripe.products.retrieve(id)
    .then(prod => {
      context.result = prod;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get a prod error!`);
    });
};

module.exports = { getAProd };