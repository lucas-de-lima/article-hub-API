const {
  createNewPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByTerm,
} = require('../services/postServices');

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

const updatePostByIdController = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const updatedPost = await updatePostById(post, id);
  return res.status(200).json(updatedPost);
};

const deletePostByIdController = async (req, res) => {
  const { id } = req.params;
  await deletePostById(id);

  return res.status(204).json({});
};

const getPostByTermController = async (req, res) => {
  const { q } = req.query;
  console.log(q);
  const posts = await getPostByTerm(q);
  return res.status(200).json(posts);
};

module.exports = {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostByIdController,
  deletePostByIdController,
  getPostByTermController,
};
