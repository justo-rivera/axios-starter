const express = require('express')
const router = express.Router()
const BBModel = require('../models/bb.model')

router.get('/', (req, res) => {
    res.render('home.hbs')
})

router.get('/characters', (req, res) => {
    BBModel.find()
        .then( characters => {
            res.render('bb-char.hbs', {characters})
        })
        .catch( err => res.send(err))
})

module.exports = router;