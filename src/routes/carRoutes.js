import express from 'express'
const carRoute = express.Router();

import { getAllCars, createCarSale, viewSpecificCar, markCarAsSold, updateCarPrice, viewUnsold, deleteCar } from '../controllers/carController';

carRoute.get('/cars', getAllCars);
carRoute.get('/car/:id', viewSpecificCar);
carRoute.post('/car', createCarSale);
carRoute.patch('/car/:id/status', markCarAsSold);
carRoute.patch('/car/:id/price', updateCarPrice);
carRoute.get('/car', viewUnsold);
carRoute.delete('/car/:id', deleteCar);


export default carRoute;