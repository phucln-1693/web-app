const stripe = require(`../../../config/stripe.js`);
const error = require(`../../constants/errors.js`);
const entities = require(`../../constants/entities.js`);

const { createPlan } = require(`../before/plan/createMakePlan.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `plans`,
    data: {
      amount: `5000`,
      interval: `day`,
      product: `prod_EL6ar6N5DqIuzI`,
      currency: `usd`
    },
    app: {
      service: {},
      error: {}
    }
  };

  hook = createPlan;
  stripe.plans.create = data => {
    if (data.currency.length == 3) return Promise.resolve(`sucess`);
    return Promise.reject(`failed`);
  };

});

describe(`createPlan`, () => {

  test(`should throw an error when missing field`, async () => {
    context.data.currency = undefined;
    await expect(hook(context)).rejects.toThrow(error.INVALID_PARAM);
  });

  test(`should throw an error when one of fields is invalid`, async () => {
    context.data.currency = `Viet Nam Dong`;
    await expect(hook(context)).rejects.toThrow(`failed`);
  });

  test(`should sucess when input is valid`, async () => {
    await expect(hook(context)).resolves.not.toThrowError();
  });
});