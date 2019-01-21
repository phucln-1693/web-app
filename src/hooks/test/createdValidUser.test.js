const { validUser } = require(`../before/user/createdValidUser.js`);
const { MISSING_USER_NAME, CONFLIC_USER_NAME } = require(`../../constants/errors.js`);
const { USER_ALREADY_EXISTS } = require(`../../constants/entities.js`);
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
      service: {},
      error: {}
    }
  };
});

describe(`createdValidUser`, () => {
  beforeEach(() => {
    hook = validUser;
  });
  beforeEach(() => {
    context.app.service = () => {
      return {
        find: objQuery => {
          if (objQuery.query.userName === USER_ALREADY_EXISTS) return { successCase: false, total: 1 };
          else return { successCase: true };
        }
      };
    };
  });

  test(`should reject when userName is missing`, async () => {
    context.data = {};
    await expect(hook(context)).rejects.toThrow(MISSING_USER_NAME);
  });

  test(`should reject when userName is existed`, async () => {
    context.data = { userName: USER_ALREADY_EXISTS };
    await expect(hook(context)).rejects.toThrow(CONFLIC_USER_NAME);
  });

  test(`should pass when field is valid`, async () => {
    await expect(hook(context)).resolves.not.toThrowError();
  });
});