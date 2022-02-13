const Product = require('../models/product')

module.exports = {

  index: async (req, res, next) => {
    await Product.find({}, (err, docs) => {
    if (err) res.status(500).send({message: `Error al buscar en la base de datos ${err}`})
    if (!docs) res.status(404).send({message: `No existen productos`})
    res.status(200).json(docs)
    })
  },

  add: async (req, res, next) => {
    let product = new Product(req.body)
    await product.save((err, doc) => {
      if (err) res.status(500).send({message: `Error al salvar en la base de datos ${err}`})
      res.status(200).json(doc)
    })
  },

  getOne: async (req, res, next) => {
    let id = req.params.id
    await Product.findById(id, (err, doc) => {
      if (err) res.status(500).send({message: `Error al buscar en la base de datos ${err}`})
      if (!doc) res.status(404).send({message: `El producto no existe`})
      res.status(200).json(doc)
    })
  },

  update: async (req, res, next) => {
    let id = req.params.id
    let data = req.body
    await Product.findByIdAndUpdate(id, data, (err) => {
      if (err) res.status(500).send({message: `Error al actualizar en la base de datos ${err}`})
      res.status(200).json({success: true})
    })
  },

  remove: async (req, res, next) => {
    let id = req.params.id
    await Product.findByIdAndRemove(id, (err) => {
      if (err) res.status(500).send({message: `Error al eliminar en la base de datos ${err}`})
      res.status(200).json({success: true})
    })
  }
}
