const { createToken } = require(`../before/token/createMakeToken.js`);
const error = require(`../../constants/errors.js`);
const entities = require(`../../constants/entities.js`);
const stripe = require(`../../../config/stripe.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `tokens`,
    data: {
      number: `4242424242424242`,
      exp_month: 12,
      exp_year: 2020,
      cvc: '123'
    },
    app: {
      service: {},
      error: {}
    }
  };
  stripe.tokens.create = data => {
    if (data.card.number === `4242424242424242`) return Promise.resolve(`thisIsAnAccessToken`);
    return Promise.reject(Error(`Invalid data`));
  };
});

describe(`createToken`, () => {
  beforeEach(() => {
    hook = createToken;
  });
  test(`should throw error when data missing field`, async () => {
    context.data.number = undefined;
    await expect(hook(context)).rejects.toThrow(error.INVALID_PARAM);
  });

  test(`should throw error when number of card is invalied`, async () => {
    context.data.number = `4242424242424243`;
    await expect(hook(context)).rejects.toThrow(`Invalid data`);
  });

  test(`should pass when card is valid`, async () => {
    await expect(hook(context)).resolves.not.toThrowError();
  });
});