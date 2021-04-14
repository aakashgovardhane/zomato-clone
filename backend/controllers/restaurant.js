const Restaurant = require('../models/restaurants');
const Item = require('../models/items');
const Order = require('../models/orders');

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
exports.restLogin = (req, res) => {
    const restLogin = req.body.restLogin;
    Restaurant.find(restLogin)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully", Restaurant: response[0] })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getRestaurantList = (req, res) => {
    const { city_name } = req.body;
    let findRestNames = {};
    city_name ? findRestNames = { city_name: city_name } : null;
    Restaurant.find(findRestNames)
        .then(response => {
            res.status(200).json({ message: "Restaurant Fetched Successfully", Restaurants: response })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}

exports.getItemsByRestaurant = (req, res) => {
    const { resId } = req.body;
    Item.find({ restaurantId: resId }).then(response => {
        res.status(200).json({ message: "Restaurant items fetched successfully", itemsList: response })
    }).catch(err => console.log(err))
}

exports.getOrdersByRestaurant = (req, res) => {
    const { resId } = req.body;
    Order.find({ restaurantId: resId }).then(response => {
        res.status(200).json({ message: "Restaurant Orders fetched successfully", Orders: response })
    }).catch(err => console.log(err))
}

exports.placeOrder = (req, res) => {
    const { placedOrder } = req.body
    Order.insertMany(placedOrder)
        .then(
            response => res.status(200).json({ "message": "Order Placed Successfully", "PlacedOrder": response })
        )
        .catch(
            err => res.status(500).send(err)
        )
}

exports.completeOrder = (req,res) => {
    const {orderId} = req.body 
    Order.remove({_id:orderId}).then(
        resonse => res.status(200).json({"messege":"Order Mark As Completed"})
    ).catch(err=>console.log(err))
}