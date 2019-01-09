const keySecret = `sk_test_xdlm5mgI9XwUvUL8dxd8ACmF`;
const stripe = require("stripe")(keySecret);
const { INTERNAL_ERROR } = require(`../../../constants/errors.js`);
const { HAPPY_SHOPPING, DESCRIPTION, USD } = require(`../../../constants/entities.js`);

const payment = async context => {
  context.result.message = `${HAPPY_SHOPPING}`;
  const { data, result } = context;
  const amount = result.total;

  stripe.customers.create({
    email: data.stripeEmail,
    source: data.stripeToken
  })
    .then(customer => {
      stripe.charges.create({
        amount,
        description: `${DESCRIPTION}`,
        currency: `${USD}`,
        customer: customer.id
      })
    })
    .then(() => {
      return context;
    })
    .catch(err => {
      if (err) console.log(`${INTERNAL_ERROR}: ${JSON.stringify(err)}`);
      throw Error(`${INTERNAL_ERROR}`);
    })
}

module.exports = { payment };