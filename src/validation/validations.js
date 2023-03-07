const { getUserByEmailService } = require('../services/usersServices');
const { loginSchema } = require('./schemas');

const validateLogin = async (email, password) => {
  loginSchema.validate({ email, password });
  if (!email && !password) {
      return { type: 400, message: 'Some require fields are missing' };
    }
    const user = await getUserByEmailService(email);
    if (!user || password !== user.password) {
      return { type: 400, message: 'invalid fields' };
    }
};

module.exports = {
    validateLogin,
};