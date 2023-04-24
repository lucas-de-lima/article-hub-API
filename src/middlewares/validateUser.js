const { createNewUser, getUserByEmail } = require('../services/usersServices');
const { validateUserSchema } = require('../validation/validations');

const validateUser = async (req, res, next) => {
  const user = req.body;
  const validateResponse = validateUserSchema(user);

  if (validateResponse.error) {
    const { message } = validateResponse.error.details[0];
    return res.status(400).json({ message });
  }

  const userExists = await getUserByEmail(user.email);
  if (userExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await createNewUser(user);

  req.data = newUser;
  next();
};

module.exports = validateUser;
