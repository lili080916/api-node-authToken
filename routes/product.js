const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()

const {
  index,
  add,
  getOne,
  update,
  remove
} = require('../controllers/product')

router.get('/', auth, index)
router.get('/:id', getOne)
router.post('/', add)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router
