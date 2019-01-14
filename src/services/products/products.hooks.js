const { createProd } = require(`../../hooks/before/product/createMakeProd.js`);
const { getAllProds } = require(`../../hooks/after/product/findGetAllProd.js`);
const { getAProd } = require(`../../hooks/after/product/getAProd.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [getAllProds],
    get: [getAProd],
    create: [createProd],
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
