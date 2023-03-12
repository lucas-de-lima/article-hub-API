const { loginSchema, userSchema, categorySchema, postSchema } = require('./schemas');

const validateLoginSchema = (login) => loginSchema.validate(login);

const validateUserSchema = (user) => userSchema.validate(user);

const validateCategorySchema = (category) => categorySchema.validate(category);

const validatePostSchema = (post) => postSchema.validate(post);

module.exports = {
    validateLoginSchema,
    validateUserSchema,
    validateCategorySchema,
    validatePostSchema,
};