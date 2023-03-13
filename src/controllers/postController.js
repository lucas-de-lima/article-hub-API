const { createNewPost, getAllPosts, getPostById } = require('../services/postServices');

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

const getPostByIdController = async (req, res) => {
    const { id } = req.params; 
    const post = await getPostById(id);
    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
};

module.exports = {
    createPostController,
    getAllPostsController,
    getPostByIdController,
};