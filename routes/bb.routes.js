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

router.get('/quotes', (req, res) => {
    BBModel.find({quotes: {$not: {$size: 0}}})
        .then( characters => 
            res.render('bb-quotes.hbs', {characters})
            )
        .catch( err => console.error(err))
})

module.exports = router;