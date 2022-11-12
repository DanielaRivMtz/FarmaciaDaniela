const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()
const {dbConnect} = require('./config/mongo')

const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/routes'))

dbConnect();
app.listen(3000, () => {
    console.log('Servidor listo')
})