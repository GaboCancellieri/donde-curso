'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var claseSchema = new Schema({
    _id: String,
    dias: [Date],
    horarioInicio: Date,
    duracion: Number,
    tipo: String,
    sitio: {type: Schema.Types.ObjectId, ref: 'Sitio'},
    modulo: {type: Schema.Types.ObjectId, ref: 'Modulo'},
});

var Clase = mongoose.model('Clase', claseSchema);
module.exports = Clase;