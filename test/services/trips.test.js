const app = require('../../src/app');

describe('\'trips\' service', () => {
  it('registered the service', () => {
    const service = app.service('trips');
    expect(service).toBeTruthy();
  });
});
