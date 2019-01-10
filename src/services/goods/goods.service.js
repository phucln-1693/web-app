// Initializes the 'goods' service on path '/goods'
const createService = require('feathers-mongoose');
const createModel = require('../../models/goods.model');
const hooks = require('./goods.hooks');
const { GOODS } = require(`../../constants/entities.js`);


module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use(`/${GOODS}`, createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('goods');

  service.hooks(hooks);
};
