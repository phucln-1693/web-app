const stripe = require(`../../../../config/stripe.js`);

const getAllProds = async context => {  // maybe check user role
  await stripe.products.list(
    { limit: 100 })
    .then(prods => {
      context.result = prods;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get full prod errors`);
    });
};

module.exports = { getAllProds };