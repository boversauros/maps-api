'use strict'
const Position = require('../models/Position')


// @description Get all positions
// @route GET /api/v1/positions
// @access Public
exports.getPositions = async (req, res, next) => {
    try {
     const positions = await Position.find()
     
     return res.status(200).json({
         success: true,
         count: positions.length,
         data: positions
     })
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Server error'})       
    }
}

// @description Create a position
// @route POST /api/v1/positions
// @access Publi (for now)

exports.addStore = async (req, res, next) => {
    try {
        const position = await Position.create(req.body)
        
        return res.status(200).json({
            success: true,
            data: position
        })
    } catch (error) {
        console.error(error)
        if (error.code === 11000) {
            return res.status(400).json({error: 'This position already exists'})
        }
        res.status(500).json({error: 'Server error'})       
    }
}