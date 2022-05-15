const express = require('express')
const router = express.Router();
const controller = require('../controllers/premium-controller')

router.get('/', controller.getIdEstab)
router.post('/', controller.post)
router.put('/:cpf', controller.put)
router.delete('/:cpf', controller.delete)


module.exports = router