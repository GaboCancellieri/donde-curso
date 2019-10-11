'use strict'
var express = require('express');
var ModuloController = require('../controllers/modulo');
var api = express.Router();

api.get('/', ModuloController.getModulos);
api.get('/:idModulo', ModuloController.getModulo);
api.patch('/:idModulo', ModuloController.patchModulo);
api.post('/', ModuloController.postModulo);
api.delete('/:idModulo', ModuloController.deleteModulo);

module.exports = api;