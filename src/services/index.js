const user = require('./user/user.service.js');
const charge = require('./charge/charge.service.js');
const cart = require('./cart/cart.service.js');
const goods = require('./goods/goods.service.js');
const products = require('./products/products.service.js');
const plans = require('./plans/plans.service.js');
const customers = require('./customers/customers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(charge);
  app.configure(cart);
  app.configure(goods);
  app.configure(products);
  app.configure(plans);
  app.configure(customers);
};
