const { disallow } = require('feathers-hooks-common');
const { createCustomer } = require(`../../hooks/before/customer/createMakeCustomer.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createCustomer],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
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
