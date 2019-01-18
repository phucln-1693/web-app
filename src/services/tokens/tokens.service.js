// Initializes the `tokens` service on path `/tokens`
const createService = require('./tokens.class.js');
const hooks = require('./tokens.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tokens', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tokens');

  service.hooks(hooks);
};
