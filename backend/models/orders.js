const mongoose = require('mongoose');

const schema = mongoose.Schema;

const getOrders = new schema({
    address: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
    },
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

module.exports = mongoose.model('order', getOrders);
