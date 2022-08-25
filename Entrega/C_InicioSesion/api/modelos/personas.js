const mongoose = require("mongoose");

const schema_persona = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    apellidos: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: false },
    cedula: { type: String, required: true, unique: false },
    fechaNacimiento: { type: String, required: true, unique: false },
    telefono: { type: String, required: true, unique: false },
    contrasena: { type: String, required: true, unique: false },
    etiqueta: { type: String, required: true, unique: false }
});

module.exports = mongoose.model("USUARIOS", schema_persona, "usuarios");