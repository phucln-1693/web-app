const stripe = require(`../../../config/stripe.js`);
const entities = require(`../../constants/entities.js`);
const failed = `failed`;
const subId = `subscriptionId`;
const { getAllSub } = require(`../after/subscription/findGetAllSubscription.js`);
let hook;
let context;


beforeEach(() => {
  context = {
    type: entities.BEFORE,
    method: entities.CREATE,
    path: `subscriptions`,
    app: {
      service: {},
      error: {}
    }
  };

  hook = getAllSub;

  stripe.subscriptions.list = () => {
    return Promise.resolve(`success`);
  };
});

describe(`findGetAllSubscription`, () => {
  test(`should throw an error when have any error from stripe`, () => {
    stripe.subscriptions.list = () => {
      return Promise.reject(failed);
    };
    expect(hook(context)).rejects.toThrow(failed);
  });

  test(`should success when valid request`, () => {
    expect(hook(context)).resolves.not.toThrowError();
  });
});