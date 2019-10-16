'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materiaSchema = new Schema({
    _id: String,
    nombre: String,
    añoCarrera: Number,
});

var Materia = mongoose.model('Materia', materiaSchema);
module.exports = Materia;