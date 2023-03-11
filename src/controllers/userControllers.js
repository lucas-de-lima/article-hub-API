const { generateToken } = require('../auth/authFunction');

const userController = async (req, res) => {
    const user = req.data;
    console.log(user);
    const token = generateToken(user);

   return res.status(201).json({ token });
};

module.exports = {
    userController,
};