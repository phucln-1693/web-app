const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;
const cusId = `cusId`;

const { getACustomer } = require(`../after/customer/getACustomer.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `plans`,
    id: cusId,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getACustomer;
  stripe.customers.retrieve = id => {
    if (id == cusId) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`getACustomer`, () => {
  test(`should throw an error when invalid customerId`, () => {
    context.id = `anInvalidCustomerid`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should sucess when valid id`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});