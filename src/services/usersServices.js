const { Op } = require('sequelize');
const { User } = require('../models/Index');

const getAllUsersService = async () => {
    const users = User.findAll({ attributes: { exclude: ['password'] } });
    return users;
};

const getUserByLoginService = async ({ email, password }) => {
    const user = await User.findOne({ 
        where: {
            [Op.and]: [
                { email },
                { password },
            ],
        },
        attributes: { exclude: ['password'] },
    });
    return user;
};

const getUserByIdService = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
};

module.exports = {
    getAllUsersService,
    getUserByLoginService,
    getUserByIdService,
};