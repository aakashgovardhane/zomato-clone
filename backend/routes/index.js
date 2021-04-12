const express = require('express');

const location = require('../controllers/location');
const mealtype = require('../controllers/mealtype');
const user = require('../controllers/user');
const filter = require('../controllers/filter');
const restaurantController = require('../controllers/restaurant');

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
router.post('/getItemsbyrestaurant/',restaurantController.getItemsByRestaurant);

module.exports = router ;