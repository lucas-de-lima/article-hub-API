const { getCategoryById } = require('../services/categoriesServices');
const { validatePostSchema, validateUpdatePostSchema } = require('../validation/validations');

const hasCategory = async (categoriesIds) => {
    const response = await Promise.all(
        categoriesIds.map((id) => getCategoryById(id)),
    );
    return !response.some((category) => category === null);
};

const validatePost = async (req, res, next) => {
    const post = req.body;
    const validate = validatePostSchema(post);
    if (validate.error) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (!(await hasCategory(post.categoryIds))) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    
    next();
};

const validateUpdatePost = async (req, res, next) => {
    const post = req.body;
    const { id } = req.params;
    const { id: userId } = req.data;
    console.log(id, userId);
    const validate = validateUpdatePostSchema(post);
    if (validate.error) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    if (+id !== userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    
    next();
};

module.exports = { validatePost, validateUpdatePost };