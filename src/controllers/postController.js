const { createNewPost } = require('../services/postServices');

const createPostController = async (req, res) => {
   const { id } = req.data;
   const post = req.body;
   const newPost = await createNewPost(post, id);
    return res.status(201).json(newPost);
};

module.exports = {
    createPostController,
};