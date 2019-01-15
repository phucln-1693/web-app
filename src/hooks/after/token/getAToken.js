const stripe = require(`../../../../config/stripe.js`);

const getAToken = async context => {  // maybe check user role
  const { id } = context;
  await stripe.tokens.retrieve(id)
    .then(tk => {
      context.result = tk;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`get a plan error!`);
    });
};

module.exports = { getAToken };