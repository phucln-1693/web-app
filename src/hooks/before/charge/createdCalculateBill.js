const { CART, GOODS } = require(`../../../constants/entities.js`);
const { MISSING_USER_ID } = require(`../../../constants/errors.js`);

const calculateBill = async context => {
  const { id } = context.data;
  if (!id) throw new PaymentError(`${MISSING_USER_ID}`);
  const cart = await context.app.service(`${CART}`).find({
    query: {
      _id: id
    }
  });
  const goods = cart.data[0].goods;
  const arrGoodID = [];
  const dicGoods = {};
  for (let i = 0; i < goods.length; i++) {
    let tempId = goods[i]._id;
    arrGoodID.push(tempId);
    dicGoods[tempId] = goods[i];
  }

  // GET PRICE to calculate amount
  const goodsQueryDB = await context.app.service(`${GOODS}`).find({
    query: {
      _id: {
        $in: arrGoodID
      }
    }
  });
  const goodsInDB = goodsQueryDB.data;
  for (let i = 0; i < goodsInDB.length; i++) {
    if (arrGoodID.indexOf(goodsInDB[i]._id) == -1) continue;
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