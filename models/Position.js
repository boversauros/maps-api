'use strict'

const mongoose = require('mongoose')

const PositionSchema = new mongoose.Schema({
    positionId: {
        type: String,
        required: [true, 'Please add a positionId'],
        unique: true,
        trim: true,
        maxlength: [10, 'Position ID must be less than 10 chars']
    },
    address: {
        type: String,
        required: [true, 'Please add an address'],
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
            index: '2dshpere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Position', PositionSchema)
