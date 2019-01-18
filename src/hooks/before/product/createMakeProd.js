const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const prodModel = {
//   name : `product01`,
//   type: `service`
// };
const createProd = async context => {
  const { data } = context;
  if (!data.name || !data.type) throw Error(`${error.INVALID_PARAM}`);
  await stripe.products.create(data)
    .then(prod => {
      context.result = prod;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = { createProd };