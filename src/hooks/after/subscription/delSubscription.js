const stripe = require(`../../../../config/stripe.js`);

const delSubscription = async context => {
  const {
    id
  } = context;
  await stripe.subscriptions.del(id)
    .then(subscription => {
      context.result = subscription;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = {
  delSubscription
};
