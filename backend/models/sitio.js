'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sitioSchema = new Schema({
    _id: String,
    nombre: String,
    latitud: String,
    longitud: String,
    piso: Number,
});

var Sitio = mongoose.model('Sitio', sitioSchema);
module.exports = Sitio;
