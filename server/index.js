// Dependencies and Config
require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT

// Middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hi. I am the testing page.'
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

// Users
// id, name, username, password

// Matches
// id, username, wins, losses