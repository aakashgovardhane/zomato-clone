const Restaurant = require('../models/restaurants');
const Item = require('../models/items');
const { response } = require('express');

exports.getRestaurantDetailsById = (req, res) => {
    const restaurantId = req.body.restaurantId;
    Restaurant.findById(restaurantId)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully", Restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantList = (req, res) => {
    const {city_name} = req.body ;
    let findRestNames = {} ;
    city_name ? findRestNames={city_name:city_name} : null ;
    Restaurant.find(findRestNames)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully", Restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getItemsByRestaurant=(req,res)=>{
    const {resId} =req.body ;
    Item.find({restaurantId:resId}).then(response=>{
        res.status(200).json({message: "Restaurant items fetched successfully",itemsList:response})
    }).catch(err=>console.log(err))
}
