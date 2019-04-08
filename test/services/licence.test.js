const app = require('../../src/app');

describe('\'licence\' service', () => {
  it('registered the service', () => {
    const service = app.service('licence');
    expect(service).toBeTruthy();
  });
});
