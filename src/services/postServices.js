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

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const updatePostById = async ({ title, content }, id) => {
  try {
      await BlogPost.update(
      { title },
      { where: { id } },
      );
      await BlogPost.update(
      { content },
      { where: { id } },
    );
    return getPostById(id);
  } catch (error) { return error; }
};

module.exports = {
  getPostByIdService,
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
};
