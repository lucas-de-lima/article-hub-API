const { Category } = require('../models/Index');

const createNewCategory = async ({ name }) => {
   const newCategory = await Category.create({ name });
   return newCategory;
};

const getAllCategories = async () => {
    const allCategories = await Category.findAll();
    console.log(allCategories);
    return allCategories;
};

module.exports = {
    createNewCategory,
    getAllCategories,
};