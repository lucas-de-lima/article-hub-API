const { generateToken } = require('../auth/authFunction');
const { getAllUsersService, getUserByIdService } = require('../services/usersServices');

const createUserController = async (req, res) => {
    const user = req.data;
    console.log(user);
    const token = generateToken(user);

   return res.status(201).json({ token });
};

const getAllUsersController = async (req, res) => {
    const allUsers = await getAllUsersService();

    return res.status(200).json(allUsers);
};

const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    const user = await getUserByIdService(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    createUserController,
    getAllUsersController,
    getUserByIdController,
};