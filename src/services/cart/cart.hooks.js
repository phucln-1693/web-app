const { disallow } = require('feathers-hooks-common');
const { internalOnly } = require(`../../hooks/before/cart/createdInternalOnly.js`);
const { validItems } = require(`../../hooks/before/cart/updatedValidItems.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [internalOnly],
    update: [validItems],
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
