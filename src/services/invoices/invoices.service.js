// Initializes the `invoices` service on path `/invoices`
const createService = require('./invoices.class.js');
const hooks = require('./invoices.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/invoices', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('invoices');

  service.hooks(hooks);
};
