// Initializes the `guests` service on path `/guests`
const createService = require('feathers-mongoose');
const createModel = require('../../models/guests.model');
const hooks = require('./guests.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/guests', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('guests');

  service.hooks(hooks);
};
