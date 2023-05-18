const { Category } = require('../models/Index');

const createNewCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

const getCategoryById = async (id) => {
  const user = await Category.findByPk(id);
  return user;
};

module.exports = {
  createNewCategory,
  getAllCategories,
  getCategoryById,
};
