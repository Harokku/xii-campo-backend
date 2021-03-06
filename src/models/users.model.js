// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({

    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true},
    userName: {type: String},
    role: {type: String, lowercase: true, enum: ['admin', 'user'], default: 'user'},

  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
