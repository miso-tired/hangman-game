const { user } = require('../models')
const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/register', async (req, res) => {
    try {
        const { name, username, password } = req.body
        const hash = await bcrypt.hash(password, saltRounds)
        const newUser = await user.create({ name, username, password: hash })
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

router.get('/login', async (req, res) => {
    try {
        const { username, password } = req.query

        if (!username) {
            return res.status(400).json({
                message: 'Invalid username'
            })
        }

        const foundUser = await user.findOne({ where: { username } })
        if (!foundUser) {
            return res.status(404).json({
                message: 'No existing user with information provided.'
            })
        }
        const match = await bcrypt.compare(password, foundUser.password)
        if(!match) {
            return res.status(401).json({
                message: 'Incorrect password'
            })
        }
        res.json(foundUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error'
        })
    }
})

module.exports = router