const { loginSchema, userSchema } = require('./schemas');

const validateLoginSchema = (login) => loginSchema.validate(login);

const validateUserSchema = (user) => userSchema.validate(user);

module.exports = {
    validateLoginSchema,
    validateUserSchema,
};