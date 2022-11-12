const UsuarioModel = require('../models/usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req,res)=>{
    try {
        const {user, password} = req.body
        const usuario = await UsuarioModel.findOne({usuario:user})
        if(!usuario) return res.status(400).json({error: 'Usuario no encontrado'})
        const valid = await bcrypt.compare(password, usuario.password)
        if(!valid) return res.status(400).json({error: 'Contraseña incorrecta'})
        let token = jwt.sign({usuario:usuario.usuario,
            id: usuario._id
        },'secretKey')
        res.send({status:200,token:token})
    } catch (err) {
        res.status(500)
        res.send({error: 'Ocurrio un error'+ err})
    }
}

const create = async (req,res)=>{
    try {
        const {user, password} = req.body
        const hash = bcrypt.hashSync(password,15)
        const usuario = await UsuarioModel.create({usuario:user, password:hash})
        res.send({data:usuario})
    } catch (err) {
        res.status(500)
        res.send({error: 'Ocurrio un error'+ err})
    }
}

module.exports = {login, create}