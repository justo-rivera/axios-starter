const axios = require('axios')
const mongoose = require('mongoose');
const BBModel = require('../models/bb.model');
require('../config/database.config')

axios.get('https://breakingbadapi.com/api/characters')
    .then(
        ({data}) => {
            BBModel.create(data)
                .then(
                    resp => {
                        console.log(resp)
                        mongoose.disconnect()
                    })
                .catch(err=> console.error(err))
        }
    )
    .catch(
        error => console.error(error)
    )

