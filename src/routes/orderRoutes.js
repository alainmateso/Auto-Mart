import express from 'express';
const orderRoute = express.Router();

import { createPurchaseOrder, updateOrderPrice } from '../controllers/orderController'

orderRoute.post('/order', createPurchaseOrder);
orderRoute.patch('/order/:id/price', updateOrderPrice);

export default orderRoute;