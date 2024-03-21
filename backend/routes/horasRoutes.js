const express = require('express')
const horaController = require('../controllers/horaController.js')

const router = express.Router()

router.route('/')
  .get(horaController.getAllHoras)
  .post(horaController.createNewHora)
  .patch(horaController.updateHora)
  .delete(horaController.deleteHora)

module.exports = router