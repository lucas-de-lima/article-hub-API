const { createNewUser } = require('../services/usersServices');
const { validateUserSchema } = require('../validation/validations');

const validateUser = async (req, res, next) => {
    const user = req.body;
    const validateResponse = validateUserSchema(user);
    if (validateResponse.error) {
      const errorMessage = validateResponse.error.details[0].message;
      console.log(errorMessage);
      return res.status(400).json({ errorMessage });
    }
    const newUser = await createNewUser(user);
    req.data = newUser;
  next();
};

module.exports = validateUser;