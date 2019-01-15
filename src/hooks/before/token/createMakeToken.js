const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const tokenModel = {
//   number: '4242424242424242',
//   exp_month: 12,
//   exp_year: 2020,
//   cvc: '123'
// }

const createToken = async context => {
  const { data } = context;
  if (!data.number || !data.exp_month || !data.exp_year || !data.cvc) throw Error(`${error.INVALID_PARAM}`);
  await stripe.tokens.create({
    card: data
  })
    .then(token => {
      context.result = token;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = { createToken };  