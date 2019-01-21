const stripe = require(`../../../config/stripe.js`);
const error = require(`../../constants/errors.js`);
const entities = require(`../../constants/entities.js`);

const { createProd } = require(`../before/product/createMakeProd.js`);
let hook;
let context;
beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `products`,
    data: {
      name: `product01`,
      type: `service`
    },
    app: {
      service: {},
      error: {}
    }
  };

  stripe.products.create = data => {
    if (data.type == `service`) return Promise.resolve({ sucsess: true });
    return Promise.reject(`false to create prod`);
  };

  hook = createProd;
});

describe(`createMakeProd`, () => {

  test(`should throw an error when missing fields`, async () => {
    context.data.name = undefined;
    await expect(hook(context)).rejects.toThrow(error.INVALID_PARAM);
  });

  test(`should throw an error when type field failed`, async () => {
    context.data.type = `invalid_type`;
    await expect(hook(context)).rejects.toThrow(`false to create prod`);
  });

  test(`should pass when valid data`, async () => {
    await expect(hook(context)).resolves.not.toThrowError();
  });
});