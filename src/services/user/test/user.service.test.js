const assert = require(`assert`);
const app = require(`../../../app`);

describe(`service: /user`, () => {
  test(`should be registerd`, () => {
    const service = app.service(`/user`);

    assert.ok(service, `Registered the service`);
  });
});