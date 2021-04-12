const mongoose = require('mongoose');

const schema = mongoose.Schema;

const getLocations = new schema({
    city_id: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('location', getLocations);