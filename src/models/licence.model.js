// licence-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const licence = new Schema({
    participantId: {type: Schema.Types.ObjectId, ref: 'participants'},
    departureDate: {type: Date},
    returnDate: {type: Date},
    parentName: {type: String, required: true},
    parentRelationship: {type: String, required: true,}
  }, {
    timestamps: true
  });

  return mongooseClient.model('licence', licence);
};
