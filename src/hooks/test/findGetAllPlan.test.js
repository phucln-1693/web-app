const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;

let hook;
let context;
const { getAllPlans } = require(`../after/plan/findGetAllPlan.js`);


beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `plans`,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAllPlans;
  stripe.plans.list = () => {
    return Promise.resolve(`success`);
  };
});

describe(`findGetAllPlans`, () => {

  test(`should throw an error when have error from stripe api`, () => {
    stripe.plans.list = () => {
      return Promise.reject(failed);
    };
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid request`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});