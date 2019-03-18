const app = require('../../src/app');

describe('\'vehicles\' service', () => {
  it('registered the service', () => {
    const service = app.service('vehicles');
    expect(service).toBeTruthy();
  });
});
