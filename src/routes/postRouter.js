const express = require('express');
const { createPostController, getAllPostsController,
     getPostByIdController } = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, createPostController);
postRouter.get('/', validateToken, getAllPostsController);
postRouter.get('/:id', validateToken, getPostByIdController);

module.exports = postRouter;