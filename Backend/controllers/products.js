const ProductoModel = require('../models/producto')

//MOSTRAR
const mostrar = async (req,res)=>{
    try{
        let page = req.params.pagina ? req.params.pagina -1 : 0
        const productos = await ProductoModel.find()
        let initial = page * 2
        let final = initial + 2
        console.log(productos)
        let filterRes= productos.slice(initial,final)
        filterRes.forEach((element,i) => {
            filterRes[i].img= __dirname+'/assets/images/'+element.codigo+'.jpg'          
        });
        res.send({data: filterRes})

    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+ err})
    }
}

//CREAR
const crear = async (req,res)=>{
    try{
        const {codigo, nombre, precio, cantidad, dosis, img} = req.body
        const producto = await ProductoModel.create({
            codigo,
            nombre,
            precio,
            cantidad,
            dosis,
            img
        })
        res.send({data: producto})

    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
    
}

//ACTUALIZAR
const actualizar = async (req,res)=>{
    try{
        const {id, nombre, precio, cantidad, dosis, img} = req.body
        const producto = await ProductoModel.updateOne({_id:id},
            {
                $set:{
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad,
                    dosis: dosis,
                    img: img
                }
            })
            res.send({data: producto})
    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
    
}
//BUSCAR
const buscar =async (req,res) =>{
    try{
        const string = req.params.string
        const productos = await ProductoModel.find({'nombre':{'$regex':string,'$options':'i'}})
        res.status(200)
        res.send({data: productos})     



    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
}

// TRAER UNO
const buscarUno = async (req, res)=>{
    try{
        const codigo = req.params.codigo
        const producto = await ProductoModel.findOne({codigo:codigo})
        res.status(200)
        res.send({data:producto})
    } catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
}
//ELIMINAR
const eliminar = async (req,res)=>{
    try{
        const{id} = req.body
        const producto = await ProductoModel.deleteOne({_id:id})
        res.send({data: producto})
    }catch(err){
        res.status(500)
        res.send({error: 'Ocurrio un error'+err})
    }
}

module.exports = {mostrar, crear, actualizar, eliminar,buscarUno,buscar}