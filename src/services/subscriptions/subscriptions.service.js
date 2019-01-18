// Initializes the `subscriptions` service on path `/subscriptions`
const createService = require('./subscriptions.class.js');
const hooks = require('./subscriptions.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/subscriptions', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('subscriptions');

  service.hooks(hooks);
};
