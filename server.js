'use strict'

// requires
const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

// load env vars
dotenv.config({ path: './config/config.env' })
const { env: { PORT = 5000, NODE_ENV } } = process

const app = express()

// Body parser
app.use(express.json())

// Enable cors
app.use(cors())

// Routes
app.use('/api/v1', require('./routes/stores'))

app.listen(PORT, () => console.info(`server running in ${NODE_ENV} on port ${PORT}`))