const { BadRequest, Conflict, PaymentError } = require(`@feathersjs/errors`);
const price = 5; // will update with other hook before get price soon


const calculateBill = async context => {
  const { id } = context.data;
  if (!id) throw new PaymentError(`User ID must be provided!`);
  const cart = await context.app.service(`cart`).find({
    query: {
      _id: id
    }
  });
  const goods = cart.data[0].goods;
  const arrId = [];
  const dicGoods = {};
  for (let i = 0; i < goods.length; i++) {
    let tempId = goods[i]._id;
    arrId.push(tempId);
    dicGoods[tempId] = goods[i];
  }

  const goodsQueryDB = await context.app.service(`goods`).find({
    query: {
      _id: {
        $in: arrId
      }
    }
  });
  const goodsInDB = goodsQueryDB.data;
  for (let i = 0; i < goodsInDB.length; i++) {
    if (arrId.indexOf(goodsInDB[i]._id) == -1) continue;
    dicGoods[goodsInDB[i]._id].price = goodsInDB[i].price;
  }
  let total = 0;
  for (let prop in dicGoods) {
    if (Reflect.has(dicGoods, prop)) total += dicGoods[prop].num * dicGoods[prop].price;
  }
  context.data.total = total.toString()
  return context;
}

module.exports = { calculateBill };