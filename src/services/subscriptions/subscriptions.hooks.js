const {
  getASub
} = require(`../../hooks/after/subscription/getASubscription.js`);
const {
  getAllSub
} = require(`../../hooks/after/subscription/findGetAllSubscription.js`);
const {
  delSubscription
} = require(`../../hooks/after/subscription/delSubscription.js`);
const {
  createSubscription
} = require(`../../hooks/before/subscription/createMakeSubscription.js`);


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createSubscription],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [getAllSub],
    get: [getASub],
    create: [],
    update: [],
    patch: [delSubscription],
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
