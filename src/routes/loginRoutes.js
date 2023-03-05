const express = require('express');
const { loginController } = require('../controllers/loginController');
const validateToken = require('../middlewares/validateToken');

const loginRouter = express.Router();

loginRouter.post('/login', validateToken, loginController);

module.exports = loginRouter;
