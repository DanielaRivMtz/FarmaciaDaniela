const mongoose = require('mongoose')

const promocionSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    productos: String,
    fecha: String,
    banner: String
}, {versionKey: false})

module.exports = mongoose.model('promociones', promocionSchema)