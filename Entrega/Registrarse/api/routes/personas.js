const express = require("express");
//necesitamos requerir el modelo de personas
const Persona = require("../modelos/personas");
const router = express.Router();



//Endpoint permite realizar una búsqueda a la base de datos por email del usuario
router.get("/buscar-persona-email", (req, res) => {
    let email = req.query.email;
    Persona.find({ email: email }, (error, personaDB) => {
        if (error) {
            res.status(500).json({
                resultado: false,
                msj: "Ocurrió el siguiente error",
                error
            });
        } else {
            if (personaDB == "") {
                res.status(200).json({
                    resultado: true,
                    msj: "Persona no esta registrada",

                });
            } else {
                res.status(200).json({
                    resultado: true,
                    msj: "Persona encontrada",
                    persona: personaDB
                });
            }

        }
    });
});

//http://localhost:3000/api/listar
//GET--> recuperar informacion
router.get("/listar", (req, res) => {
    Persona.find((error, lista) => {
        if (error) {
            res.status(500).json({
                resultado: false,
                msj: "No se pudo listar los usuarios",
                error
            });
        } else {
            res.status(200).json({
                resultado: true,
                msj: "Listado exitosos",
                lista
            });
        }
    });
});

//http://localhost:3000/api/buscar-persona-nombre?nombre=3-1111-1111
//se realiza una búsqueda por nombre
router.get("/buscar-persona-nombre", (req, res) => {
    let nombre = req.query.nombre;
    Persona.find({ nombre: nombre }, (error, personaDB) => {
        if (error) {
            res.status(500).json({
                resultado: false,
                msj: "Ocurrió el siguiente error",
                error
            });
        } else {
            if (personaDB == "") {
                res.status(200).json({
                    resultado: true,
                    msj: "Persona no esta registrada",

                });
            } else {
                res.status(200).json({
                    resultado: true,
                    msj: "Persona encontrada",
                    persona: personaDB
                });
            }

        }
    });
});


//http://localhost:3000/api/registrar
//POST --> crear nuevos registros
router.post("/registrar", (req, res) => {
    let body = req.body;
    let nueva_persona = new Persona({
        nombre: body.nombre,
        apellidos: body.apellidos,
        email: body.email
    });

    nueva_persona.save((error, personaDB) => {
        if (error) {
            res.status(500).json({
                resultado: false,
                msj: "No se pudo hacer el registro",
                error
            });
        } else {
            res.status(200).json({
                resultado: true,
                msj: "Registro exitoso",
                personaDB
            });
        }
    });
});

//http://localhost:3000/api/modificar
//PUT --> actualizar registros existentes
router.put("/modificar", (req, res) => {
    let body = req.body;
    Persona.updateOne({ _id: body._id }, { $set: req.body }, function(error, info) {
        if (error) {
            res.status(500).json({
                resultado: false,
                msj: "No se pudo actualizar la persona",
                error
            });
        } else {
            res.status(200).json({
                resultado: true,
                msj: "Actulización exitosa",
                info
            });
        }
    });

});

//http://localhost:3000/api/eliminar
//DELETE --> eliminar registros
router.delete("/eliminar", (req, res) => {
    let body = req.body;
    Persona.deleteOne({ _id: body._id },
        function(error, info) {
            if (error) {
                res.status(500).json({
                    resultado: false,
                    msj: "No se pudo eliminar la persona",
                    error
                });
            } else {
                res.status(200).json({
                    resultado: true,
                    msj: "Se eliminó la persona de forma exitosa",
                    info
                });
            }
        });
});



module.exports = router;