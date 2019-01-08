// goods-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const goods = new Schema({
    _id: { type: String, required: true },
    link: { type: String, require: true },
    price: { type: String, require: true }
  }, {
      timestamps: true
    });

  return mongooseClient.model('goods', goods);
};
