const { validateCategorySchema } = require('../validation/validations');

const validateCategory = (req, res, next) => {
    const category = req.body;
    const validate = validateCategorySchema(category);
    if (validate.error) {
        const { message } = validate.error;
        return res.status(400).json({ message });
    }
    next();
};

module.exports = {
    validateCategory,
};