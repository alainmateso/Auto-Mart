import express from 'express';
import carRoute from '../src/routes/carRoutes';
import userRoute from '../src/routes/userRoutes';
import orderRoute from '../src/routes/orderRoutes'
import bodyParser from 'body-parser'

const myapp = express();
myapp.use(bodyParser.urlencoded({ extended: true }))
myapp.use(bodyParser.json());

myapp.use('/api/v1', carRoute);
myapp.use('/api/v1', userRoute);
myapp.use('/api/v1', orderRoute);

const PORT = process.env.PORT || 3000;
myapp.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});

export default myapp;
