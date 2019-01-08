const { BadRequest, Conflict, PaymentError } = require(`@feathersjs/errors`);
const keyPublishable = `pk_test_4hdlCMzDeRUfh7zkBIfXG9O2`;
const keySecret = `sk_test_xdlm5mgI9XwUvUL8dxd8ACmF`;
const path = require(`path`);
const stripe = require("stripe")(keySecret);

const payment = async context => {
  context.result.message = `wish you: happy shopping`;
  const { data, result } = context;
  const amount = result.total;

  stripe.customers.create({
    email: data.stripeEmail,
    source: data.stripeToken
  })
    .then(customer => {
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "usd",
        customer: customer.id,
        receipt_email: "luong.ngoc.phuc@framgia.com"
      })
    })
    .then(() => {
      return context;
    })
    .catch(err => {
      if (err) console.log(`loi buoc thanh toan: ${JSON.stringify(err)}`);
      throw Error(`loi thanh toan`);
    })
}

module.exports = { payment };