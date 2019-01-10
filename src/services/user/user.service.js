// Initializes the 'user' service on path '/user'
const createService = require('feathers-mongoose');
const createModel = require('../../models/user.model');
const hooks = require('./user.hooks');
const { USER } = require(`../../constants/entities.js`);

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use(`/${USER}`, createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user');

  service.hooks(hooks);
};
