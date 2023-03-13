const express = require('express');
const { createPostController, getAllPostsController,
     getPostByIdController, 
     updatePostByIdController } = require('../controllers/postController');
const { validatePost, validateUpdatePost } = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, createPostController);
postRouter.get('/', validateToken, getAllPostsController);
postRouter.get('/:id', validateToken, getPostByIdController);
postRouter.put('/:id', validateToken, validateUpdatePost, updatePostByIdController);

module.exports = postRouter;