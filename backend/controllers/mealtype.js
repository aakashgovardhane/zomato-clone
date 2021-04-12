const { response } = require('express');
const mealtypes = require('../models/mealtypes');

exports.getMealTypes = (req,res) => {

    mealtypes.find().then(
        response => res.status(200).json({"message" : "Mealtypes Fetched Successfully","mealtypes": response})
    )
    .catch(
        err => console.log(err)
    )
}