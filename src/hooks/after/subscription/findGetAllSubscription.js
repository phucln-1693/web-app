const stripe = require(`../../../../config/stripe.js`);

const getAllSub = async context => {  // maybe check user authentication
  await stripe.subscriptions.list(
    { limit: 100 })
    .then(subs => {
      context.result = subs;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get full plans errors`);
    });
};

module.exports = { getAllSub };