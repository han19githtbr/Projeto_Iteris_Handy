const express = require('express')
const tremController = require('../controllers/tremController')

const router = express.Router()

router.route('/').get(tremController.all)

router.route('/').post(tremController.create)

router.route('/:id').get(tremController.one)

router.route('/:id').put(tremController.update)

router.route('/:id').delete(tremController.delete)

module.exports = router