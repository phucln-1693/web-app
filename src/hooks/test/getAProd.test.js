const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;
const prodId = `prodId`;

const { getAProd } = require(`../after/product/getAProd.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `products`,
    id: prodId,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAProd;
  stripe.products.retrieve = id => {
    if (id == prodId) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`getAProd`, () => {
  test(`should throw an error when invalid prodId`, () => {
    context.id = `anInvalidProdId`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should sucess when valid id`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});