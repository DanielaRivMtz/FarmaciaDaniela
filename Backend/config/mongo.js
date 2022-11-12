const mongoose = require('mongoose')

const dbConnect = ()=>{
    const url = 'mongodb://127.0.0.1/farmacia'
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('Conectado exitosamente'))
    .catch((e)=> console.log('Error de conexion: '+ e))
}

module.exports = {dbConnect}