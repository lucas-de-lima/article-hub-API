const { getUserByLoginService } = require('../services/usersServices');
const { validateLoginSchema } = require('../validation/validations');

const validateLogin = async (req, res, next) => {
    const login = req.body;
    const validateResponse = validateLoginSchema(login);
    
    if (validateResponse.error) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const user = await getUserByLoginService(login);
    if (!user) {
       return res.status(400).json({ message: 'Invalid fields' });
    }
    req.data = user;
    next();
};

module.exports = validateLogin;