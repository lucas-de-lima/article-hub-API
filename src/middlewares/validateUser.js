const { validateUserSchema } = require('../validation/validations');

const validateUser = (req, res, next) => {
    const user = req.body;
    const validateResponse = validateUserSchema(user);
    const errorMessage = validateResponse.error.details[0].message;
    if (validateResponse.error) {
      return res.status(400).json({ errorMessage });
    }
    const newUser = '';
  next();
};

module.exports = validateUser;