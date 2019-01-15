const { createCustomer } = require(`../../hooks/before/customer/createMakeCustomer.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createCustomer],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
