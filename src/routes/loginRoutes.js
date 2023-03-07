const express = require('express');
const { loginController } = require('../controllers/loginController');
const validateLogin = require('../middlewares/validateLogin');
// const validateToken = require('../middlewares/validateToken');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController);

module.exports = loginRouter;
