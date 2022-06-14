const express = require('express')
const router = express.Router();
const controller = require('../controllers/premium-controller')

router.get('/', controller.getIdEstab)
router.post('/', controller.post)
router.put('/', controller.put)
router.delete('/', controller.delete)


module.exports = router