const app = require('../../src/app');

describe('\'goods\' service', () => {
  it('registered the service', () => {
    const service = app.service('goods');
    expect(service).toBeTruthy();
  });
});
