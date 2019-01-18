const { validUser } = require(`../before/user/createdValidUser.js`);
let context;
let hook;
beforeEach(() => {
  context = {
    type: `before`,
    method: `create`,
    path: `users`,
    data: {
      userName: 'user01'
    },
    app: {
      service: undefined,
      error: undefined
    }
  };
});
describe(`createdValidUser`, () => {
  beforeEach(() => {
    hook = validUser;
  });
  beforeEach(() => {
    context.app.service = {
      find: () => { }
    };
  });
  test(`should pass when field is valid`, async () => {
    await expect(hook(context)).not.toBeNull();
  });
});