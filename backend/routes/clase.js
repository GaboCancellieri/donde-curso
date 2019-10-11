'use strict'
var express = require('express');
var ClaseController = require('../controllers/clase');
var api = express.Router();

api.get('/', ClaseController.getClases);
api.get('/:idClase', ClaseController.getClase);
api.patch('/:idClase', ClaseController.patchClase);
api.post('/', ClaseController.postClase);
api.delete('/:idClase', ClaseController.deleteClase);

module.exports = api;