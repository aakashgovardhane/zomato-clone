const { response } = require('express');
const users = require('../models/users');

exports.signup = (req, res) => {
    const { saveuser } = req.body
    users.find(saveuser)
        .then(
            response => {
                if (response.length > 0) {
                    res.status(200).json({ "message": "user exist", "existUser": response[0] })
                } else {
                    const user = new users(saveuser)
                    user.save(user)
                        .then(
                            responsesave => res.status(200).json({ "message": "user saved Successfully", "savedUser": responsesave })
                        )
                        .catch(
                            err => res.status(500).send(err)
                        )
                }
            }
        )
}

exports.login = (req, res) => {
    const { user } = req.body
    users.find(user)
        .then(response => {
            if (response.length < 2) {
                res.status(200).json({ "messege": "User Logged in Successfully", "loggedInUser": response[0] })
            }
            else {
                res.status(200).json({ "messege": "User not found try again" })
            }
        })
        .catch(err => res.status(500).send(err))
}

exports.cart = (req, res) => {
    const { userId, cart } = req.body
    users.updateOne({ _id: userId }, { $set: { cart: cart } })
        .then(response => {
            res.status(200).json({ "messege": "Updated Successfully", "updated": true })
        })
        .catch(err => res.status(500).send(err))
}

exports.findUserById = (req, res) => {
    const { userId } = req.body
    users.findById(userId)
        .then(response => {
                res.status(200).json({ "messege": "User fetched Successfully", "user": response })
        })
        .catch(err => res.status(500).send(err))
}