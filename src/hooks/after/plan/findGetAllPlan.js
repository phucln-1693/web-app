const stripe = require(`../../../../config/stripe.js`);

const getAllPlans = async context => {  // maybe check user role
  await stripe.plans.list(
    { limit: 100 })
    .then(plans => {
      context.result = plans;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get full plans errors`);
    });
};

module.exports = { getAllPlans };