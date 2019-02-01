const app = require('../../src/app');

describe('\'invoices\' service', () => {
  it('registered the service', () => {
    const service = app.service('invoices');
    expect(service).toBeTruthy();
  });
});
