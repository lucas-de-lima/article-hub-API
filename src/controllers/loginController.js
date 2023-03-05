const { generateToken } = require('../auth/authFunction');
const { getUserByEmailService } = require('../services/usersServices');
require('dotenv/config');

const isFieldsBodyValid = (email, password) => email && password;

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!isFieldsBodyValid(email, password)) {
            return res.status(400).json({ message: 'Some require fields are missing' });
        }
        const user = await getUserByEmailService(email);
        if (!user || password !== user.password) {
            return res.status(400).json({ message: 'invalid fields' });
        }
        const { password: _, ...userWithoutPassword } = user.dataValues;
        const token = generateToken(userWithoutPassword);
        res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Erro interno', error: error.message });
} 
};

module.exports = {
    loginController,
};