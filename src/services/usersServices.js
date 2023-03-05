const { User } = require('../models/Index');

const getAllUsersService = async () => {
    const users = User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserByEmailService = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const getUserByIdService = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
};

module.exports = {
    getAllUsersService,
    getUserByEmailService,
    getUserByIdService,
};