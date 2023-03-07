const { validateLogin } = require('../validation/validations');

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const { type, message } = await validateLogin(email, password);
    if (type) {
        return res.status(type).json({ message });
    }
    return res.status(200).json([]);
};

module.exports = {
    loginController,
};