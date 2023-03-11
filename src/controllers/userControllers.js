const { generateToken } = require('../auth/authFunction');
const { getAllUsersService } = require('../services/usersServices');

const createUserController = async (req, res) => {
    const user = req.data;
    console.log(user);
    const token = generateToken(user);

   return res.status(201).json({ token });
};

const getAllUsersController = async (req, res) => {
    const allUsers = await getAllUsersService();

    res.status(200).json(allUsers);
};

module.exports = {
    createUserController,
    getAllUsersController,
};