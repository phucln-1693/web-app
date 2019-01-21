const stripe = require(`../../../config/stripe.js`);
const error = require(`../../constants/errors.js`);
const entities = require(`../../constants/entities.js`);
const INVALID_CUSTOMER = `invalid customer`;
const { createSubscription } = require(`../before/subscription/createMakeSubscription.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `subscriptions`,
    data: {
      customer: `cus_tok`,
      plans: [{
        plan: `plan_EL7kRn7L2E2v0g`
      },
      {
        plan: `plan_EL7cLi63pq1PSg`,
        quantity: 5
      }]
    },
    app: {
      service: {},
      error: {}
    }
  };

  stripe.subscriptions.create = subObj => {
    if (subObj.customer === `cus_tok`) return Promise.resolve(`sub success`);
    return Promise.reject(INVALID_CUSTOMER);
  };
});

describe(`createMakeSubscription`, () => {
  beforeEach(() => {
    hook = createSubscription;
  });

  test(`should throw error when plans is missing`, async () => {
    context.data.plans = undefined;
    await expect(hook(context)).rejects.toThrow(error.INVALID_PARAM);
  });

  test(`should throw an error when customer is invalid`, async () => {
    context.data.customer = `invalid_cus_tok`;
    await expect(hook(context)).rejects.toThrow(INVALID_CUSTOMER);
  });

  test(`should success when input is valid`, async () => {
    await expect(hook(context)).resolves.not.toThrowError();
  });


});
