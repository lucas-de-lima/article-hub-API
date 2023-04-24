const { Op } = require('sequelize');
const { User } = require('../models/Index');

const getAllUsersService = async () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserByLoginService = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const getUserByIdService = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

const createNewUser = async ({ displayName, email, password }) => {
  await User.create({ displayName, email, password, image: '' });
  const newUser = await User.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
    attributes: { exclude: ['password'] },
  });
  return newUser;
};

const getUserByEmail = async (email) => {
  const response = await User.findOne({
    where: {
      email,
    },
  });
  return response;
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAllUsersService,
  getUserByLoginService,
  getUserByIdService,
  createNewUser,
  getUserByEmail,
  deleteUser,
};
