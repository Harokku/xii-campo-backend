// guests-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

// Mail validator
const validateMail = (mail) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(mail);
};

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const guests = new Schema({
    surname: {type: String, required: true},
    name: {type: String, required: true},
    dob: {type: Date},
    criUnit: {type: String},
    mail: {type: String, trim: true, lowercase: true, validate: [validateMail, 'Check e-mail field']},
    personalPhone: {type: String, trim: true},
    allergies: {type: [String]},
    status: {type: String},
    payed: {type: Boolean},
    amount: {type: Number},
  }, {
    timestamps: true
  });

  return mongooseClient.model('guests', guests);
};
