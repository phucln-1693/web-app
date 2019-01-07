
const { calculateBill } = require(`../../hooks/beforeCalculateBill.js`);
// const { afterBilling } = require(`../../hooks/after_billing.js`);

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
