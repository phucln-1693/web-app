const { BadRequest, Conflict, PaymentError } = require(`@feathersjs/errors`);
const price = 5; // will update with other hook before get price soon


const calculateBill = async context => {
  const { data } = context;
  if (!data.goods || !Array.isArray(data.goods)) throw new PaymentError(`goods is empty`);
  let total = 0;
  for (let i = 0; i < data.goods.length; i++) {
    total += data.goods[i].num * price;
  }
  context.data = {
    price: `${total}$`
  };
  return context;
}

module.exports = { calculateBill };