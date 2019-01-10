const { disallow } = require('feathers-hooks-common');
const { validUser } = require('../../hooks/before/user/createdValidUser.js');
const { createCart } = require(`../../hooks/after/user/createdCart.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validUser],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [createCart],
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
