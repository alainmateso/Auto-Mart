import express from 'express';
const userRouter = express.Router();

import { createUser, login } from '../controllers/userController';

userRouter.post('/auth/signup/', createUser);
userRouter.post('/auth/signin', login);

export default userRouter;
