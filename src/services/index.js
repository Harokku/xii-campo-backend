const users = require('./users/users.service.js');
const guests = require('./guests/guests.service.js');
const participants = require('./participants/participants.service.js');
const vehicles = require('./vehicles/vehicles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(guests);
  app.configure(participants);
  app.configure(vehicles);
};
