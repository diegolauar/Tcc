const express = require('express')
const router = express.Router();
const controller = require('../controllers/vouncher-controller')


router.get('/', controller.get)
router.get('/all', controller.getAll)
router.get('/id', controller.getById)
router.post('/', controller.post)
router.put('/:id', controller.put)
// router.delete('/:cpf', controller.delete)


module.exports = router