const {
  createNewCategory,
  getAllCategories,
} = require('../services/categoriesServices');

const createCategoryController = async (req, res) => {
  const category = req.body;
  const newCategory = await createNewCategory(category);

  return res.status(201).json(newCategory);
};

const getAllCategoriesController = async (req, res) => {
  const allCategories = await getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};
