const express = require('express')
const onibusController = require('../controllers/onibusController')

const router = express.Router()

router.route('/').get(onibusController.all)

router.route('/').post(onibusController.create)

router.route('/:id').get(onibusController.one)

router.route('/:id').put(onibusController.update)

router.route('/:id').delete(onibusController.delete)

module.exports = router