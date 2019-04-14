// vehicles-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;

  const vehicles = new Schema({

    radioCode: {type: String, unique: true, required: true},
    plate: {type: String, uppercase: true},
    type: {type: String, enum: ['ambulanza', 'pullman', 'camion', 'merci', 'persone', 'auto', 'altro']},
    trailer: {type: Boolean, default: false},
    trips: [{type: Schema.Types.ObjectId, ref: 'trips'}]

  }, {
    timestamps: true
  });

  return mongooseClient.model('vehicles', vehicles);
};
