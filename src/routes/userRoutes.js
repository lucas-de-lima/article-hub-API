const express = require('express');
const { createUserController, getAllUsersController } = require('../controllers/userControllers');
const validateToken = require('../middlewares/validateToken');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateUser, createUserController);
userRouter.get('/', validateToken, getAllUsersController);

module.exports = userRouter;