const jwt = require('jsonwebtoken')

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, 'secretKey')
    } catch (e) {
        return null
    }
}

module.exports = {verifyToken}