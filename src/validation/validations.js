const {
  loginSchema,
  userSchema,
  categorySchema,
  postSchema,
  updatePostSchema,
} = require('./schemas');

const validateLoginSchema = (login) => loginSchema.validate(login);

const validateUserSchema = (user) => userSchema.validate(user);

const validateCategorySchema = (category) => categorySchema.validate(category);

const validatePostSchema = (post) => postSchema.validate(post);

const validateUpdatePostSchema = (post) => updatePostSchema.validate(post);

module.exports = {
  validateLoginSchema,
  validateUserSchema,
  validateCategorySchema,
  validatePostSchema,
  validateUpdatePostSchema,
};
