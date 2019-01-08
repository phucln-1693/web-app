const { disallow } = require('feathers-hooks-common');
const { rejectExternal } = require(`../../hooks/before/cart/createdRejectExternal.js`);
const { validItems } = require(`../../hooks/before/cart/updatedValidItems.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [rejectExternal],
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
