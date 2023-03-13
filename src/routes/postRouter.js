const express = require('express');
const { createPostController, getAllPostsController } = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, createPostController);
postRouter.get('/', validateToken, getAllPostsController);

module.exports = postRouter;