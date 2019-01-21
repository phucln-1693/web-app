const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;

let hook;
let context;
const { getAllCustomer } = require(`../after/customer/findGetAllCustomer.js`);


beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `customers`,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAllCustomer;
  stripe.customers.list = () => {
    return Promise.resolve(`success`);
  };
});

describe(`getAllCustomer`, () => {

  test(`should throw an error when have error from stripe api`, () => {
    stripe.customers.list = () => {
      return Promise.reject(failed);
    };
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid request`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});