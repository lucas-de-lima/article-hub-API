const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.required(),
    password: Joi.required(),
});

module.exports = {
    loginSchema,
};