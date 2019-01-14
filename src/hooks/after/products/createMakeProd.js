const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const prodModel = {
//   prodName : `product01`,
//   prodType: `service`
// };
const createProd = async context => {
  const { data } = context;
  if (!data.prodName || !data.prodType) throw Error(`${error.INVALID_PARAM}`);
  await stripe.products.create({
    name: data.prodName,
    type: data.prodType
  })
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