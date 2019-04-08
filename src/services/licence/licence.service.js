// Initializes the `licence` service on path `/licence`
const createService = require('feathers-mongoose');
const createModel = require('../../models/licence.model');
const hooks = require('./licence.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/licence', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('licence');

  service.hooks(hooks);
};
