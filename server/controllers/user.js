const { user } = require('../models')
const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

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

// router.get('/login', async (req, res) => {
//     try {
//         const user = await user.find()
//         res.json(user)
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({
//             message: 'Server Error'
//         })
//     }
// })

module.exports = router