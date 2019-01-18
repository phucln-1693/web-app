const app = require('../../src/app');

describe('\'charge\' service', () => {
  it('registered the service', () => {
    const service = app.service('charge');
    expect(service).toBeTruthy();
  });
});
