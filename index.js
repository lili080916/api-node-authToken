'use strict'

const mongoose = require('mongoose'),
      app = require('./app'),
      config = require('./config')

// connection DB
mongoose.Promise = global.Promise
mongoose.connect(config.db, {
  useMongoCLient: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err))

// settings

// static file

// error handlers

// start the server
app.listen(config.port, () => {
  console.log('server on port', config.port)
})
