const express = require('express')
const router = express.Router();
const controller = require('../controllers/establishment-controller')


router.get('/', controller.getEstablishments)
router.get('/:id', controller.getById)
router.post('/', controller.post)
router.post('/login', controller.login)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)


module.exports = router