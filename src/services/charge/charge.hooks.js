
const { calculateBill } = require(`../../hooks/before/charge/createdCalculateBill.js`);
const { payment } = require(`../../hooks/after/charge/createdPayment.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [calculateBill],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [payment],
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
