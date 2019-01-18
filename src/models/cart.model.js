// cart-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const cart = new Schema(
    {
      _id: { type: String, required: false },
      goods: { type: Array, required: true }

    }, {
      timestamps: true
    });

  return mongooseClient.model('cart', cart);
};
