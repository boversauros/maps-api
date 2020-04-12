'use strict'

const express = require('express')
const { getPositions, addStore } = require('../controllers/positions')

const router = express.Router()

router.route('/positions').get(getPositions).post(addStore)

module.exports = router