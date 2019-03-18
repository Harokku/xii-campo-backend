const app = require('../../src/app');

describe('\'participants\' service', () => {
  it('registered the service', () => {
    const service = app.service('participants');
    expect(service).toBeTruthy();
  });
});
