import jwt from 'jsonwebtoken'
import users from '../models/users'

require('dotenv').config();
const { userKey } = process.env

export const createUser = (req, res) => {
  const { email, first_name, last_name, password, address } = req.body;
  const token = jwt.sign({ email: email }, userKey);
  const user = {
    token,
    id: users.length + 1,
    email,
    first_name,
    last_name,
    password,
    address,
    is_admin: false
  }
  user.token = token;
  console.log(user);
  users.push(user);
  return res.status(201).json({
    status: res.statusCode,
    data: user
  });
}

export const login = (req, res) => {
  const user = users.find(log => log.email == req.body.email && log.password == req.body.password)
  if (!user) {
    return res.status(400).json({
      status: res.statusCode,
      error: 'Incorrect email or password'
    });
  }
  return res.status(200).json({
    status: res.statusCode,
    data: user
  })
}