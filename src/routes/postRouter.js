const express = require('express');
const {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostByIdController,
  deletePostByIdController,
  getPostByTermController,
} = require('../controllers/postController');
const {
  validatePost,
  validateUpdatePost,
  validateDeletePost,
} = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, createPostController);
postRouter.get('/', validateToken, getAllPostsController);
postRouter.get('/:id', validateToken, getPostByIdController);
postRouter.put(
  '/:id',
  validateToken,
  validateUpdatePost,
  updatePostByIdController,
);
postRouter.delete(
  '/:id',
  validateToken,
  validateDeletePost,
  deletePostByIdController,
);
postRouter.get('/search:searchTerm', validateToken, getPostByTermController);

module.exports = postRouter;
