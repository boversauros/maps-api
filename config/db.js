
'use strict'

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.info(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
      console.error(error)
      process.exit(1)
  }    
}

module.exports = connectDB
