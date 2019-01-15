const { disallow } = require('feathers-hooks-common');
const { getACustomer } = require(`../../hooks/after/customer/getACustomer.js`);
const { getAllCustomer } = require(`../../hooks/after/customer/findGetAllCustomer.js`);
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
    find: [getAllCustomer],
    get: [getACustomer],
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
