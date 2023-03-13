const { BlogPost, Category, User, sequelize } = require('../models/Index');
const { getCategoryById } = require('./categoriesServices');

const getPostByIdService = async (id) => {
  const user = await BlogPost.findByPk(id);
  return user;
};

const createNewPost = async ({ title, content, categoryIds }, userId) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const newPost = await BlogPost.create(
        { title, content, userId, published: Date.now(), updated: Date.now() },
        { transaction: t },
      );
      const categories = await Promise.all(
        categoryIds.map((id) => getCategoryById(id)),
      );
      await newPost.setCategories(categories, { transaction: t });
      newPost.dataValues.categories = categories;
      return newPost;
    });
    return result;
  } catch (error) { return error; }
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return posts;
};

module.exports = {
  getPostByIdService,
  createNewPost,
  getAllPosts,
};
