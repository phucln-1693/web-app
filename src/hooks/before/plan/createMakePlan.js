const stripe = require(`../../../../config/stripe.js`);
const error = require(`../../../constants/errors`);
// const planModel = {
//   amount: `5000`,
//   interval: `day`,
//   product: `prod_EL6ar6N5DqIuzI`,
//   currency: `usd`
// };

const createPlan = async context => {
  const { data } = context;
  if (!data.amount || !data.interval || !data.product || !data.currency) throw Error(`${error.INVALID_PARAM}`);
  await stripe.plans.create(data)
    .then(plan => {
      context.result = plan;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = { createPlan };  