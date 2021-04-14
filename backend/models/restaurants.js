const mongoose = require('mongoose');

const schema = mongoose.Schema;

const getRest = new schema({
    name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    locality: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: [
        {
            mealtype: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    ],
    Cuisine: [
        {
            cuisine: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        }
    ]
})
module.exports = mongoose.model('restaurant', getRest);