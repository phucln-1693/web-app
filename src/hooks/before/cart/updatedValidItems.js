// gio hang cua user 1 mua san pham 7 so luong: 5; mua san pham 9 so luong 15
// const data = {
//   "_id": 1,
//   "goods": [{"_id": 7, "num": 5}, {"_id": 9, "num": 15}]
// }

const validItems = async context => {
  const { data } = context;
  const goods = data.goods;
  if (!Array.isArray(goods)) throw Error(`goods must be an array`);
  const arrId = [];
  for (let i = 0; i < goods.length; i++) {
    arrId.push(goods[i]._id);
  }
  if (arrId.length == 0) return context;

  const goodsFromDB = await context.app.service(`goods`).find({
    query: {
      "_id": {
        $in: arrId
      }
    }
  });
  if (goodsFromDB.data.length != goods.length) throw Error(`Goods is invalid`);
  return context;
}

module.exports = { validItems };