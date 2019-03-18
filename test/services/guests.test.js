const app = require('../../src/app');

describe('\'guests\' service', () => {
  it('registered the service', () => {
    const service = app.service('guests');
    expect(service).toBeTruthy();
  });
});
