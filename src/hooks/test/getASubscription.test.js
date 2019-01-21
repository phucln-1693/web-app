const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;
const subId = `subscriptionId`;
const { getASub } = require(`../after/subscription/getASubscription.js`);
let hook;
let context;

beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `subscriptions`,
    id: subId,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getASub;

  stripe.subscriptions.retrieve = id => {
    if (id == subId) return Promise.resolve(`success`);
    return Promise.reject(failed);
  };
});

describe(`getASubScription`, () => {

  test(`should throw an error when id is invalid`, () => {
    context.id = `invalidSubId`;
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid subId`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});