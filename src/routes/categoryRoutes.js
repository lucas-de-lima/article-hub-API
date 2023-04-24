const express = require('express');
const {
  createCategoryController,
  getAllCategoriesController,
} = require('../controllers/cotegoriesController');
const { validateCategory } = require('../middlewares/validateCategory');
const validateToken = require('../middlewares/validateToken');

const categoryRouter = express.Router();

categoryRouter.post(
  '/',
  validateToken,
  validateCategory,
  createCategoryController,
);
categoryRouter.get('/', validateToken, getAllCategoriesController);

module.exports = categoryRouter;
