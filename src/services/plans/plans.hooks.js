const { createPlan } = require(`../../hooks/before/plan/createMakePlan.js`);
const { getAPlan } = require(`../../hooks/after/plan/getAPlan.js`);
const { getAllPlans } = require(`../../hooks/after/plan/findGetAllPlan.js`);
module.exports = {
  before: {
    all: [],
    find: [],
    get: [getAPlan],
    create: [createPlan],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [getAllPlans],
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
