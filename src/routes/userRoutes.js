const express = require('express');
const { createUserController, getAllUsersController,
     getUserByIdController, 
     deleteUserController } = require('../controllers/userControllers');
const validateToken = require('../middlewares/validateToken');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateUser, createUserController);
userRouter.get('/', validateToken, getAllUsersController);
userRouter.get('/:id', validateToken, getUserByIdController);
userRouter.delete('/me', validateToken, deleteUserController);

module.exports = userRouter;