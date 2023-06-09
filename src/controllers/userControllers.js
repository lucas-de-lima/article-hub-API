const { generateToken } = require('../auth/authFunction');
const {
  getAllUsersService,
  getUserByIdService,
  deleteUser,
} = require('../services/usersServices');

const createUserController = async (req, res) => {
  const user = req.data;
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

const deleteUserController = async (req, res) => {
  const { id } = req.data;
  await deleteUser(id);

  return res.status(204).json({});
};

module.exports = {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  deleteUserController,
};
