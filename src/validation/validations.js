const { loginSchema, userSchema, categorySchema } = require('./schemas');

const validateLoginSchema = (login) => loginSchema.validate(login);

const validateUserSchema = (user) => userSchema.validate(user);

const validateCategorySchema = (category) => categorySchema.validate(category);

module.exports = {
    validateLoginSchema,
    validateUserSchema,
    validateCategorySchema,
};