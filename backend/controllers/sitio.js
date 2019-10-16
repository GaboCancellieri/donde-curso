var Sitio = require('../models/sitio');
var Modulo = require('../models/modulo');

function getSitios(req, res) {
    Sitio.find({})
        .exec((error, sitios) => {
            if (error) {
                return res.status(404).json({
                    title: 'Error',
                    error: error
                });
            }

            if (!sitios) {
                return res.status(404).json({
                    title: 'Error',
                    error: 'No hay sitios'
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: sitios
            });
        });
}

function getSitio(req, res) {
    Sitio.findById(req.params.idSitio)
        .exec((error, sitio) => {
            if (error) {
                return res.status(404).json({
                    title: 'Error',
                    error: error
                });
            }

            if (!sitio) {
                return res.status(404).json({
                    title: 'Error',
                    error: 'No existe dicha sitio'
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: sitio
            });
        });
}

function patchSitio(req, res) {
    Sitio.findById(req.params.idSitio)
        .exec((error, sitio) => {
            if (error) {
                return res.status(404).json({
                    title: 'Error',
                    error: error
                });
            }

            if (!sitio) {
                return res.status(404).json({
                    title: 'Error',
                    error: 'No existe dicha sitio'
                });
            }

            if (req.body.nombre) {
                sitio.nombre = req.body.nombre
            }

            if (req.body.latitud) {
                sitio.latitud = req.body.latitud
            }

            if (req.body.longitud) {
                sitio.longitud = req.body.longitud
            }

            if (req.body.piso) {
                sitio.piso = req.body.piso
            }

            sitio.save((sitioGuardada) => {
                res.status(200).json({
                    message: 'Success',
                    obj: sitioGuardada
                });
            }, function (err) {
                // Si el nombre o el numero del contrato ya existen, devolver error
                if (err.code == 11000) {
                    var msj = ""
                    if (err.errmsg.toString().includes("nombre"))
                        msj = "Nombre de sitio";

                    return res.status(404).json({
                        title: 'Error',
                        error: msj + ' existente.'
                    });
                }
                return res.status(404).json({
                    title: 'Error',
                    error: err
                });
            });
        });
}

function postSitio(req, res) {
    if (!req.body.nombre) {
        sitio.nombre = req.body.nombre
    }

    if (!req.body.latitud) {
        sitio.latitud = req.body.latitud
    }

    if (!req.body.longitud) {
        sitio.longitud = req.body.longitud
    }

    if (!req.body.piso) {
        sitio.piso = req.body.piso
    }

    nuevoSitio = new Sitio({
        nombre: req.body.nombre,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        piso: req.body.piso
    });

    nuevoSitio.save((sitioGuardado) => {
        res.status(200).json({
            message: 'Success',
            obj: sitioGuardado
        });
    }, function (err) {
        // Si el nombre o el numero del contrato ya existen, devolver error
        if (err.code == 11000) {
            var msj = ""
            if (err.errmsg.toString().includes("nombre"))
                msj = "Nombre de sitio";

            return res.status(404).json({
                title: 'Error',
                error: msj + ' existente.'
            });
        }
        return res.status(404).json({
            title: 'Error',
            error: err
        });
    });
}

function deleteSitio(req, res) {
    Modulo.aggregate().unwind('clases').match({ 'clases.sitio': req.params.idSitio })
        .exec((error, modulos) => {
            if (error) {
                return res.status(404).json({
                    title: 'Error',
                    error: error
                });
            }

            if (modulos.length > 0) {
                return res.status(404).json({
                    title: 'Error',
                    error: 'Hay clases dictadas en este sitio!'
                });
            }

            Sitio.findOneAndDelete({ '_id': req.params.idSitio })
                .exec((error, sitioEliminado) => {
                    if (error) {
                        return res.status(400).json({
                            title: 'Error',
                            error: error
                        });
                    }

                    res.status(200).json({
                        message: 'Success',
                        obj: sitioEliminado
                    });
                });
        });
}

module.exports = {
    getSitios,
    getSitio,
    patchSitio,
    postSitio,
    deleteSitio
}