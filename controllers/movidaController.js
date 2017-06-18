// Requires:
const h = require('../utils/helpers')

require('dotenv').config()

// Google API configuration
const language = require('@google-cloud/language')({

  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_CLOUD_AUTH_FILE
})

// Logger configuration
const logger = require('loggeraas-node-wrapper')

const loggerConfig = {
  host: process.env.LOGGER_HOST,
  path: process.env.LOGGER_PATH,
  port: process.env.LOGGER_PORT,
  hash: process.env.LOGGER_HASH,
  enabled: (process.env.LOGGER_ENABLED === 'true'), // this is required because dotenv doesn't accept boolean params
  verbose: (process.env.LOGGER_VERBOSE === 'true')
}

const l = logger(loggerConfig)

// Controller methods:

exports.movidizator = (req, res, next) => {
  // TOTEST Check request required params are present, fail otherwise
  if (typeof req.body.text !== 'string') {
    const fail = h.apiFail(400, 'Bad Request: you need to provide text param')
    res.status(400).send(fail)
    return
  }

  // TOTEST Call Google API and retrieve the analyzed string
  language.annotate(req.body.text).then((data) => {
    // TODO Process the string and re-place every noun by movida <-- Language expert needed

    // TOTEST Log in logger-aas
    //l.log({ input: req.body.text, output: 'translation-should-be-here' }) // only logs succesful requests

    // TODO Deliver the cake. I mean, response.
  })

}
