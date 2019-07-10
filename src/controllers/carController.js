import cars from '../models/cars'
import moment from 'moment'

export const getAllCars = (req, res) => {
  return res.status(200).json({
    status: res.statusCode,
    data: cars
  });
}

export const createCarSale = (req, res) => {
  const { owner, state, price, manufacturer, model, body_type } = req.body;
  const car = {
    id: cars.length + 1,
    owner,
    created_on: moment().format(),
    state,
    status: 'available',
    price,
    manufacturer,
    model,
    body_type
  }
  cars.push(car)
  return res.status(201).json({
    status: res.statusCode,
    data: car
  });
}

export const viewSpecificCar = (req, res) => {
  const found = cars.find(car => car.id == req.params.id)
  if (!found) {
    return res.status(404).json({
      status: res.statusCode,
      error: 'No car was found'
    });
  }
  return res.status(200).json({
    status: res.statusCode,
    data: found
  });
}

export const markCarAsSold = (req, res) => {
  const found = cars.find(car => car.id == req.params.id)
  if (!found) {
    return res.status(404).json({
      status: res.statusCode,
      error: 'no car has such id'
    });
  }
  found.status = 'sold';
  return res.status(200).json({
    status: res.statusCode,
    data: found
  })
}

export const updateCarPrice = (req, res) => {
  const { price } = req.body;
  const found = cars.find(car => car.id == req.params.id)
  if (!found) {
    return res.status(404).json({
      status: res.statusCode,
      error: 'no car found'
    })
  }
  found.price = price;
  return res.status(200).json({
    status: res.statusCode,
    data: found
  })
}

export const viewUnsold = (req, res) => {
  const unsold = cars.filter(car => car.status == req.query.status)
  if (unsold.length > 0) {
    return res.status(200).json({
      status: res.statusCode,
      data: unsold
    })
  }
  return res.status(404).json({
    status: res.statusCode,
    error: 'No cars were found'
  })
}

export const deleteCar = (req, res) => {
  const carIndex = cars.findIndex(car => car.id == req.params.id)
  if (carIndex != -1) {
    cars.splice(carIndex, 1)
    return res.status(200).json({
      status: res.statusCode,
      message: 'car deleted successfully!'
    })
  }
  res.status(404).json({
    status: res.statusCode,
    error: 'No car with such an ID'
  })
}