const mongoose = require('mongoose');

const schema = mongoose.Schema;

const getItems = new schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true,
    },
    restaurantId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('item', getItems);
