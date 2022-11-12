const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    codigo: String,
    nombre: String,
    precio: String,
    cantidad: String,
    dosis: String,
    img: String
}, {versionKey: false})

module.exports = mongoose.model('productos', productoSchema)