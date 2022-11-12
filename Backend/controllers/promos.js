const PromoModel = require('../models/promocion')

//MOSTRAR
const mostrarPromos = async (req,res)=>{
    try{
        const promociones = await PromoModel.find()
        res.send({data: promociones})

    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+ err})
    }
}

//CREAR
const crearPromo = async (req,res)=>{
    try{
        const {titulo, descripcion, productos, fecha, banner} = req.body
        const promocion = await PromoModel.create({
            titulo,
            descripcion,
            productos,
            fecha,
            banner
        })
        res.send({data: promocion})

    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
    
}

//ACTUALIZAR
const actualizarPromo = async (req,res)=>{
    try{
        const {id, titulo, descripcion, productos, fecha, banner} = req.body
        const promocion = await PromoModel.updateOne({_id:id},
            {
                $set:{
                    titulo: titulo,
                    descripcion: descripcion,
                    productos: productos,
                    fecha: fecha,
                    banner: banner
                }
            })
            res.send({data: promocion})
    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
    
}

//ELIMINAR
const eliminarPromo = async (req,res)=>{
    try{
        const{id} = req.body
        const promocion = await PromoModel.deleteOne({_id:id})
        res.send({data: promocion})
    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
}

module.exports = {mostrarPromos, crearPromo, actualizarPromo, eliminarPromo}