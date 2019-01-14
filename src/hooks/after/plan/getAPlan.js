const stripe = require(`../../../../config/stripe.js`);

const getAPlan = async context => {  // maybe check user role
  const { id } = context;
  await stripe.plans.retrieve(id)
    .then(plan => {
      context.result = plan;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get a plan error!`);
    });
};

module.exports = { getAPlan };