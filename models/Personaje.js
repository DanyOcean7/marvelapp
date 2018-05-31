var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Personaje = new Schema({
  nombre: {
    type: String
  },
  email: {
    type: String
  },
  personaje: {
    type: String
  },
  enlace: {
    type: String
  }
},{
    collection: 'personajes'
});

module.exports = mongoose.model('Personaje', Personaje);