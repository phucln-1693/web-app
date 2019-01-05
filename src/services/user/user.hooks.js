const { disallow, iff } = require('feathers-hooks-common');
const { validateUser } = require(`../../hooks/validate_user.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateUser],
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
