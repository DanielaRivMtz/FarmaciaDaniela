const {verifyToken} = require('../utils/handleToken')

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(500)
            res.send({error: 'NO HAY TOKEN'})
            return
        }
        let token = req.headers.authorization.split(' ').pop()

        const dataToken = await verifyToken(token)

        if (!dataToken) {
            res.status(500)
            res.send({error: 'ERROR EN ID TOKEN'})
            return
        }

        req.usuario = dataToken.usuario
        next()
    } catch (err) {
        res.status(500)
        res.send({error: 'NO TIENE SESION'+ err})        
    }
}

module.exports = authMiddleware