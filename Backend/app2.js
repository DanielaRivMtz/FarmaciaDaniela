const mongoose = require('mongoose')
const url ='mongodb://127.0.0.1/farmacia'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('Conectado exitosamente'))
.catch((e)=> console.log('Error de conexion: '+ e))

const productoSchema = mongoose.Schema({
    codigo: String,
    nombre: String,
    precio: String,
    cantidad: String,
    dosis: String,
    img: String
}, {versionKey: false})
const ProductoModel = mongoose.model('productos', productoSchema)

const promocionSchema = mongoose.Schema({
    titulo: String,
    descripcion: String,
    productos: String,
    fecha: String,
    banner: String
}, {versionKey: false})
const PromocionModel = mongoose.model('promociones', promocionSchema)



//MOSTRAR PRODUCTOS
const mostrar = async ()=>{
    const productos = await ProductoModel.find()
    console.log(productos)
}

//MOSTRAR PROMOS
const mostrarpromos = async ()=>{
    const promociones = await PromocionModel.find()
    console.log(promociones)
}

//CREAR PRODUCTOS
const crear = async ()=>{
    const producto = new ProductoModel({
        codigo: '7502227870532',
        nombre: 'Ketorolaco',
        precio: '$99.00',
        cantidad: '10 tabletas',
        dosis: '10mg',
        img: ''
    })
    const resultado = await producto.save()
    console.log(resultado)
}

//CREAR PROMOS
const crearpromo = async ()=>{
    const promocion = new PromocionModel({
        titulo: "Promocion de verano",
        descripcion: "Descuento de hasta el 50% en protectores solares",
        productos: "Productos para la piel",
        fecha: "20 de Septiembre del 2023",
        banner: ""
    })
    const resul = await promocion.save()
    console.log(resul)
}

//ACTUALIZAR PRODUCTOS
const actualizar = async (id)=>{
    const producto = await ProductoModel.updateOne({_id:id},
        {
            $set:{
                nombre: 'Ketorolaco modificado',
                precio: '$99.20'
            }
        })
}

//ACTUALIZAR PROMOS
const actualizarpromos = async (id)=>{
    const promocion = await PromocionModel.updateOne({_id:id},
        {
            $set:{
                titulo: "Promocion de invierno modificado",
                descripcion: "Descuento de hasta el 50% en protectores solares modificado",
            }
        })
}

//ELIMINAR
const eliminar = async (id)=>{
    const producto = await ProductoModel.deleteOne({_id:id})
    console.log(producto)
}

//ELIMINAR PROMOS
const eliminarpromos = async (id)=>{
    const promocion = await PromocionModel.deleteOne({_id:id})
    console.log(promocion)
}
    



//Llamado de procedimientos
//mostrar()
//crear()
//actualizar('63646c82817f180f4b80f9b3')
//eliminar('63646c82817f180f4b80f9b3')

//mostrarpromos()
//crearpromos()
//actualizarpromos('')
//eliminarpromos('')