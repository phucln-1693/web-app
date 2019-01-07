// Initializes the `charge` service on path `/charge`
const createService = require('./charge.class.js');
const hooks = require('./charge.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/charge', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('charge');

  service.hooks(hooks);
};
