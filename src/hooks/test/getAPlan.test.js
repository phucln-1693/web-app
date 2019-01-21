const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;
const planId = `planId`;

const { getAPlan } = require(`../after/plan/getAPlan.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `plans`,
    id: planId,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAPlan;
  stripe.plans.retrieve = id => {
    if (id == planId) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`getAPlan`, () => {
  test(`should throw an error when invalid planId`, () => {
    context.id = `anInvalidPlan`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should sucess when valid id`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});