const { createNewPost, getAllPosts } = require('../services/postServices');

const createPostController = async (req, res) => {
   const { id } = req.data;
   const post = req.body;
   const newPost = await createNewPost(post, id);
    return res.status(201).json(newPost);
};

const getAllPostsController = async (req, res) => {
    const posts = await getAllPosts();
    return res.status(200).json(posts);
};

module.exports = {
    createPostController,
    getAllPostsController,
};