const express = require('express');
const router = express.Router();
 const {body} = require('express-validator');
 const captainController = require('../controllers/captain.controller');    


 router.post('/register',[ 
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be of 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be of 6 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be of 3 characters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be of 3 characters long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be greater than 0'),
    body('vehicle.vehicleType').isIn(['car', 'bike','auto']).withMessage('Invalid Vehicle Type'),
], captainController.registerCaptain);

module.exports = router;