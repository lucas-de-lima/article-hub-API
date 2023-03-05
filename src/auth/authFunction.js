const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Batatinha';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '60min',
};

const generateToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { generateToken, verifyToken };