// Initializes the `plans` service on path `/plans`
const createService = require('./plans.class.js');
const hooks = require('./plans.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/plans', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('plans');

  service.hooks(hooks);
};
