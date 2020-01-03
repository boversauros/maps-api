'use strict'

const express = require('express')
const { getPositions } = require('../controllers/positions')

const router = express.Router()

router.route('/positions').get(getPositions)

module.exports = router