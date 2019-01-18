const app = require(`../../../app.js`);
const hooks = require(`../user.hooks`);

describe(`Service user hooks`, () => {

  // Mock a service
  app.use(`/user`, {
    async create(data) {
      return data;
    },
    async get() {
      return `This is a user`;
    }
  });

  let service = app.service(`user`);
  service.hooks(hooks());


  describe(`CREATE`, () => {
    test(`should call hooks if normal`, async () => {
      
    });
  });
});