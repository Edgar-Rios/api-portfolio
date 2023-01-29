const router = require('express').Router();
const controller = require('../controllers/owners')

router.post('/', controller.create)       //C
router.get('/:id', controller.read)       //R
router.put('/:id', controller.update)     //U
router.delete('/:id', controller.delete)  //D


module.exports = router;