const express = require('express')
const router = express.Router()
const { user } = require('../models')
const bcrypt = require('bcrypt');
const saltRounds = 10;


// POST new accounts
router.post('/register', async (req, res) => {
    try {
        const { name, username, password } = req.body
        const hash = await bcrypt.hash(password, saltRounds)
        const newUser = await user.create({ name, username, password: hash })
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error.'
        })
    }
})


// GET login
router.get('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: 'Invalid username or password'
            });
        }

        const foundUser = await user.findOne({ where: { username } });

        if (!foundUser) {
            return res.status(404).json({
                message: 'No existing user with the provided username'
            });
        }

        const match = await bcrypt.compare(password, foundUser.password);

        if (!match) {
            return res.status(401).json({
                message: 'Invalid password'
            });
        }

        res.json({
            id: foundUser.id,
            name: foundUser.name,
            username: foundUser.username,
            createdAt: foundUser.createdAt,
            updatedAt: foundUser.updatedAt,
            wins: foundUser.wins,
            losses: foundUser.losses,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error.'
        });
    }
});

// GET match history
router.get('/matches/:userId', async(req, res) => {
    try {
        const { userId } = req.params

        const matchHistory = await matchRoutes.findAll ({ where: { user_id: userId }})

        if (!matchHIstory) {
            return res.status(404).json({
                message: 'No match history for this user.'
            })
        }
        res.json(matchHistory)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error.'
        })
    }
})

// POST update wins
router.post('/update-wins/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const user = await user.findByPk(userId)

        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            })
        }

        // Add wins to user data
        user.wins +=1
        await user.save()

        res.json({
            message: 'Wins updated.',
            user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error.'
        })
    }
})

// POST update losses
router.post('/update-losses/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const user = await user.findByPk(userId)

        if (!user) {
            return res.status(404).json({
                message: 'User not found.'
            })
        }

        // Add losses to user data
        user.losses +=1
        await user.save()

        res.json({
            message: 'Losses updated.',
            user
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error.'
        })
    }
})


module.exports = router;