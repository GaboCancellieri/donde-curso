'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    _id: String,
    username: String,
    password: String,
    nombre: String,
    apellido: String,
    mail: String,
});

usuarioSchema.index({ username: 1 });

var Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;