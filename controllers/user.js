'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services/index')

module.exports = {

  signUp: async (req, res, next) => {
    let user = new User(req.body)
    await user.save((err) => {
      if (err) res.status(500).send({message: `Error al crear el usuario ${err}`})
      return res.status(201).send({ token: service.createToken(user) })
    })
  },

  signIn: async (req, res, next) => {
    User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })

      req.user = user
      res.status(200).send({
        message: 'Te has logueado correctamente',
        token: service.createToken(user)
      })
    })
  }
}
