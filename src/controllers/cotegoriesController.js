const { createNewCategory } = require('../services/categoriesServices');

const createCategoryController = async (req, res) => {
    const category = req.body;
    const newCategory = await createNewCategory(category);

    return res.status(201).json(newCategory);
};

module.exports = {
    createCategoryController,
};