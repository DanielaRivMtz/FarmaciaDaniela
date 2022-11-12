const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    usuario: String,
    password: String,
}, {versionKey: false})

module.exports = mongoose.model('usuarios', usuarioSchema)