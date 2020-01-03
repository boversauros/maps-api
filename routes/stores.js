'use strict'

const express = require('express')
const router = express.Router()

router.get('/positions', (req, res) => {
  res.send('hello world')    
})

module.exports = router