const locations = require('../models/locations');

exports.getLocations = (req,res) => {
    locations.find().then(
        response => res.status(200).json({"messege": "location fetched Successfully","locations":response})
    )
    .catch(err => console.log(err))
}