const { disallow, iff } = require('feathers-hooks-common');
const { validUser } = require(`../../hooks/before/user/validUser.js`);

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
