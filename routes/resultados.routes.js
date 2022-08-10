const express = require('express')
const resultadosController = require('../controllers/resultadosController')

const router = express.Router()

router.route('/').get(resultadosController.all)

router.route('/').post(resultadosController.create)

router.route('/:id').get(resultadosController.one)

router.route('/:id').put(resultadosController.update)

router.route('/:id').delete(resultadosController.delete)

module.exports = router