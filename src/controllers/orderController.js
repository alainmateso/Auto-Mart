import orders from '../models/orders'
import moment from 'moment';

export const createPurchaseOrder = (req, res) => {
  const { car_id, price, price_offered } = req.body;
  const newOrder = {
    id: orders.length + 1, car_id, created_on: moment().format(), status: 'pending', price, price_offered
  };
  orders.push(newOrder)
  return res.status(201).json({
    status: res.statusCode,
    data: newOrder
  });
}

export const updateOrderPrice = (req, res) => {
  const { new_price_offered } = req.body;
  const found = orders.find(order => order.id == req.params.id)
  if (found.status = 'pending') {
    const newOrder = {
      id: found.id,
      car_id: found.car_id,
      created_on: found.created_on,
      status: found.status,
      old_price_offered: found.price_offered,
      new_price_offered,
    }
    orders.push(newOrder)
    return res.status(200).json({
      status: res.statusCode,
      data: newOrder
    });
  }
  res.status(400).json({
    status: res.statusCode,
    error: 'the specified order is no longer pending'
  });
}