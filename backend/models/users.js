const mongoose = require('mongoose');

const schema = mongoose.Schema;
const getUser = new schema({
    name : {
        type : String,
        required : true
    },
    number : {
        type : String
    },
    mail : {
        type : String,
    },
    username : {
        type : String,
    },
    password : {
        type : String
    },
    socialId : {
        type : String
    },
    imageUrl : {
        type : String
    },
    cart : {
        type : Array
    }
})
module.exports = mongoose.model('user',getUser);