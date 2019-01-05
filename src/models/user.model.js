// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const user = new Schema({
    user_name: { type: String, required: true },
    password: { type: String, require: false }
  }, {
      timestamps: true
    });

  return mongooseClient.model('user', user);
};
