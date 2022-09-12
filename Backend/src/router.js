const express = require('express');
const {
    listCars, 
    getcar, 
    registerNewCar, 
    upgradeCar, 
    deleteCar} = require('./controller/cars');

const routes = express();

routes.get('/cars', listCars);
routes.get('/cars/:id', getcar);
routes.post('/cars', registerNewCar);
routes.put('/cars/:id', upgradeCar);
routes.delete('/cars/:id', deleteCar);

module.exports = routes;