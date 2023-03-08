const express = require('express');
const { userController } = require('../controllers/userControllers');
const validateUser = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateUser, userController);

module.exports = userRouter;