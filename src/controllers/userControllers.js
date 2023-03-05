const { getUserByEmailService } = require('../services/usersServices');

const getUserByEmailController = async (req, res) => {
    const { email } = req.body;
    const user = getUserByEmailService(email);
    res.status(200).json(user);
};

module.exports = {
    getUserByEmailController,
};