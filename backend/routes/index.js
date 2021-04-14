const express = require('express');

const location = require('../controllers/location');
const mealtype = require('../controllers/mealtype');
const user = require('../controllers/user');
const filter = require('../controllers/filter');
const restaurantController = require('../controllers/restaurant');
const paymentController = require('../controllers/payment');

const router = express.Router();

router.get('/locations',location.getLocations);
router.get('/mealtypes',mealtype.getMealTypes);
router.post('/filter',filter.filter);
router.post('/signup',user.signup);
router.post('/login',user.login);
router.post('/getuser',user.findUserById);
router.post('/cart',user.cart);
router.post('/getrestaurantbyid',restaurantController.getRestaurantDetailsById);
router.post('/getrestaurantlist',restaurantController.getRestaurantList);
router.post('/getItemsbyrestaurant',restaurantController.getItemsByRestaurant);
router.post('/getOrdersbyrestaurant',restaurantController.getOrdersByRestaurant);

router.post('/restLogin',restaurantController.restLogin);
router.post('/placeOrder',restaurantController.placeOrder);
router.post('/completeOrder',restaurantController.completeOrder);

router.post('/payment', paymentController.payments);
router.post('/callback', paymentController.callback);

module.exports = router ;