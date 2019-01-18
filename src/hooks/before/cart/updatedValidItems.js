// gio hang cua user 1 mua san pham 7 so luong: 5; mua san pham 9 so luong 15
// const data = {
//   "_id": 1,
//   "goods": [{"_id": 7, "num": 5}, {"_id": 9, "num": 15}]
// }
const { GOODS } = require(`../../../constants/entities.js`);
const errorCode = require(`../../../constants/errors.js`);

const validItems = async context => {
  const { data } = context;
  const goods = data.goods;
  if (!Array.isArray(goods)) throw Error(`${errorCode.GOODS_MUST_BE_AN_ARRY}`);

  const arrGoodID = [];
  for (let i = 0; i < goods.length; i++) {
    arrGoodID.push(goods[i]._id);
  }
  if (arrGoodID.length == 0) return context;

  const goodsFromDB = await context.app.service(`${GOODS}`).find({
    query: {
      _id: {
        $in: arrGoodID
      }
    }
  });
  if (goodsFromDB.data.length != goods.length) throw Error(`${errorCode.INVALID_GOODS_ID}`);
  return context;
};

module.exports = { validItems };