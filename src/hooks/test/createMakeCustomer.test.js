const stripe = require(`../../../config/stripe.js`);
const error = require(`../../constants/errors.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;

let hook;
let context;
const { createCustomer } = require(`../before/customer/createMakeCustomer.js`);

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `plans`,
    data: {
      source: `tok_visa`
    },
    app: {
      service: {},
      error: {}
    }
  };

  hook = createCustomer;
  stripe.customers.create = data => {
    if (data.source == `tok_visa`) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`createMakeCustomer`, () => {

  test(`should throw an error when missing source field`, async () => {
    context.data.source = undefined;
    expect(hook(context)).rejects.toThrow(error.INVALID_PARAM);
  });

  test(`should throw an error when token is invalid`, () => {
    context.data.source = `invalid_token`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid input`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});