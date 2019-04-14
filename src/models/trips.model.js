// trips-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const trips = new Schema({
    departureDate: {type: Date},
    returnDate: {type: Date},
    destination: {type: String},
    motivation: {type: String},
    departureKm: {type: Number},
    returnKm: {type: Number},
    crews: [{type: Schema.Types.ObjectId, ref: 'participants'}],
  }, {
    timestamps: true
  });

  return mongooseClient.model('trips', trips);
};
