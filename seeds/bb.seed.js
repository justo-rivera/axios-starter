const axios = require('axios')
const mongoose = require('mongoose');
const BBModel = require('../models/bb.model');
require('../config/database.config')
let quotes = [];
axios.get('https://breakingbadapi.com/api/quotes')
    .then(
        ({data}) => {
            quotes = data;
        }
    )
axios.get('https://breakingbadapi.com/api/characters')
    .then(
        ({data}) => {
            let characters = [];
            data.forEach(
                character => {
                    let charQuotes = [];
                    quotes.map(
                        elem => {
                            if(elem.author === character.name){
                                charQuotes.push(elem.quote)
                            }
                        }
                    )
                    character.quotes = charQuotes
                    characters.push(character)
                }
            )
            
            BBModel.create(characters)
                .then(
                    resp => {
                        mongoose.disconnect()
                    })
                .catch(err=> console.error(err))
        }
    )
    .catch(
        error => console.error(error)
    )

