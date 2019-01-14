const { createProd } = require(`../../hooks/after/products/createMakeProd.js`);
const { getAllProds } = require(`../../hooks/after/products/findGetAllProd.js`);
const { getAProd } = require(`../../hooks/after/products/getAProd.js`);

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
