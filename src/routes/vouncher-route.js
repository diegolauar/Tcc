const express = require('express')
const router = express.Router();
const controller = require('../controllers/vouncher-controller')


router.get('/', controller.get)
router.get('/id', controller.getById)
router.post('/', controller.post)
// router.put('/:cpf', controller.put)
// router.delete('/:cpf', controller.delete)


module.exports = router