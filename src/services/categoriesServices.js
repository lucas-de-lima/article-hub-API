const { Category } = require('../models/Index');

const createNewCategory = async ({ name }) => {
   const newCategory = await Category.create({ name });
   return newCategory;
};

module.exports = {
    createNewCategory,
};