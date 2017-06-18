// Requires:
const express = require('express')
const router = express.Router()
const movidaController = require('../controllers/movidaController')
const { catchErrors } = require('../utils/errorHandlers')

// Routes definition:
router.get('/', (req, res) => {
  res.send(process.env.APP_NAME || 'app-name')
})

router.post('/api/v1/movidas', catchErrors(movidaController.movidizator))

module.exports = router
