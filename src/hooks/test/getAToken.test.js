const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;

let hook;
let context;
const { getAToken } = require(`../after/token/getAToken.js`);

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `tokens`,
    id: `tokenId`,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAToken;

  stripe.tokens.retrieve = id => {
    if (id == `tokenId`) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`getAToken`, () => {

  test(`should throw an error when id is invalid`, () => {
    context.id = `invalidId`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid id request`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});