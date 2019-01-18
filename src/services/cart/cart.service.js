// Initializes the `cart` service on path `/cart`
const createService = require('feathers-mongoose');
const createModel = require('../../models/cart.model');
const hooks = require('./cart.hooks');
const { CART } = require(`../../constants/entities.js`);


module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use(`/${CART}`, createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('cart');

  service.hooks(hooks);
};
