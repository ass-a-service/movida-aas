// Requires:
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/index')
const errorHandlers = require('./utils/errorHandlers')

require('dotenv').config()

// Server set up:
const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use('/', router)
server.use(errorHandlers.notFound)
server.use(errorHandlers.productionErrors)

const port = process.env.SERVER_PORT || 8009
server.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
