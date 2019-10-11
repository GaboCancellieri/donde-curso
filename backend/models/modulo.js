'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moduloSchema = new Schema({
    _id: String,
    nombre: String,
    añoAcademico: Number,
    materia: {type: Schema.Types.ObjectId, ref: 'Materia'},
});

var Modulo = mongoose.model('Modulo', moduloSchema);
module.exports = Modulo;