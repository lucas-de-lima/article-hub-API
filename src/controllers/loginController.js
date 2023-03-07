const { generateToken } = require('../auth/authFunction');

const loginController = async (req, res) => {
    const user = req.data;
    const token = generateToken(user);

   return res.status(200).json({ token });
};

module.exports = {
    loginController,
};