'use strict'

const mongoose = require('mongoose')
const geocoder = require('../utils/geocoder')

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

// Geocoder & create location
PositionSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address)
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }

    // Do not save address
    this.address = undefined
    next()
})

module.exports = mongoose.model('Position', PositionSchema)
