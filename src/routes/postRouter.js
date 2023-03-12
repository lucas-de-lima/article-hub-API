const express = require('express');
const { createPostController } = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost');
const validateToken = require('../middlewares/validateToken');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, createPostController);

module.exports = postRouter;