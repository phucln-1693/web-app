const stripe = require(`../../../../config/stripe.js`);

const getASub = async context => {  // maybe check user role
  const { id } = context;
  await stripe.subscriptions.retrieve(id)
    .then(sub => {
      context.result = sub;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get a prod error!`);
    });
};

module.exports = { getASub };