const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;

let hook;
let context;
const { getAllProds } = require(`../after/product/findGetAllProd.js`);


beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `products`,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAllProds;
  stripe.products.list = () => {
    return Promise.resolve(`success`);
  };
});

describe(`findGetAllProds`, () => {
  test(`should success when valid request`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });

  test(`should throw an error when have error from stripe api`, () => {
    stripe.products.list = () => {
      return Promise.reject(failed);
    };
    expect(hook(context)).rejects.toThrow(failed);
  });
});