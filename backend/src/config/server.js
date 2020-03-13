const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//Middleware
//cadeia de funções que estarão trabalhando com as requisições
server.use(bodyParser.urlencoded({ extend: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, () => {
    console.log(`BACKEND is runnig on port ${port}`)
})

module.exports = server