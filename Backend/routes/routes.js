const express = require('express')
const router = express.Router()
const {mostrar, crear, actualizar, eliminar,buscarUno,buscar} = require('../controllers/products')
const {mostrarPromos, crearPromo, actualizarPromo, eliminarPromo} = require('../controllers/promos')
const {login, create} = require('../controllers/users')
const authMiddleware = require('../middleware/session')
const multer  = require('multer')
mimeTypes = require('mime-types')

const storage = multer.diskStorage({
    destination:'assets/images',
    filename: function(req,file,cb){
        cb("",`${req.body.codigo?req.body.codigo:titulo}.${mimeTypes.extension(file.mimetype)}`)
    }
})
const upload = multer({ storage:storage })

//rutas de productos
router.post('/productos', authMiddleware,upload.single('img'), crear)
router.get('/productos/:pagina', mostrar)
router.get('/productos/buscarUno/:codigo', buscarUno)
router.get('/productos/search/:string', buscar)
router.post('/productos/actualizar', authMiddleware,upload.single('img'), actualizar)
router.post('/productos/eliminar', eliminar)

//rutas de promociones
router.post('/promociones', authMiddleware,upload.single('img'), crearPromo)
router.get('/promociones', mostrarPromos)
router.post('/promociones/actualizar', authMiddleware,upload.single('img'), actualizarPromo)
router.post('/promociones/eliminar', authMiddleware, eliminarPromo)

//ruta del login
router.post('/login', login)
router.post('/crearUsuario', create)

router.get('*', (req,res) => {
    res.status(404)
    res.send({error: 'Not found'})
})

module.exports = router