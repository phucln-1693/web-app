const stripe = require(`../../../../config/stripe.js`);

const getUpcommingInvoices = async context => {
  const { id } = context;
  await stripe.invoices.retrieveUpcoming(id)
    .then(upCommingInvoice => {
      context.result = upCommingInvoice;
      return context;
    })
    .catch(err => {
      if (err) throw Error(`${err}`);
      throw Error(`Unknow error when create Products`);
    });
};

module.exports = { getUpcommingInvoices };  