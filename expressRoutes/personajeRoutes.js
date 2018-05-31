var express = require('express');
var app = express();
var personajeRoutes = express.Router();

// Require Item model in our routes module
var Personaje = require('../models/Personaje');

// Defined store route
personajeRoutes.route('/add').post(function (req, res) {
  var personaje = new Personaje(req.body);
  personaje.save()
    .then(item => {
    res.status(200).json({'personaje': 'Personaje added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
personajeRoutes.route('/').get(function (req, res) {
    Personaje.find(function (err, personaje){
    if(err){
      console.log(err);
    }
    else {
      res.json(personaje);
    }
  });
});

// Defined edit route
personajeRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Personaje.findById(id, function (err, personaje){
      res.json(personaje);
  });
});

//  Defined update route
personajeRoutes.route('/update/:id').post(function (req, res) {
    Personaje.findById(req.params.id, function(err, personaje) {
    if (!personaje)
      return next(new Error('Could not load Document'));
    else {
        personaje.nombre = req.body.nombre;
        personaje.email = req.body.email;
        personaje.personaje = req.body.personaje;
        personaje.enlace = req.body.enlace;

        personaje.save().then(personaje => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
personajeRoutes.route('/delete/:id').get(function (req, res) {
    Personaje.findByIdAndRemove({_id: req.params.id}, function(err, personaje){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = personajeRoutes;