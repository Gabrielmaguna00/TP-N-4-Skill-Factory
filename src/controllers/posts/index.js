import * as services from "../../services/posts/index.js";

export const getAllPosts = async (req, res) => {
  const posts = await services.getAllPosts();
  res.json({ message: "Find posts", data: posts });
};
export const getOnePost = async (req, res) => {
  const post = await services.getOnePost(req.params.idPost);
  if (!post) {
    res.status(204).json({ message: "post not found" });
  }
  res.json({ message: "post found", data: post });
};
export const getUserPosts = async (req, res) => {
  const { idUser } = req.body;
  if (!idUser) {
    res.status(400).json({ message: "Bad request, User id empty" });
  }
  const posts = await services.getUserPosts(idUser);
  return posts;
};
export const createPost = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  const post = await services.createPost(req.body);
  return post;
};
export const updatePost = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  if (!req.params.idPost) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  const post = await services.updatePost(req.params.idPost, req.body);
  return post;
};
export const hidePost = async (req, res) => {
  if (!req.params.idPost) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  const post = await services.hidePost(req.params.idPost);
  return post;
};
export const visiblePost = async (req, res) => {
  if (!req.params.idPost) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  const post = await services.visiblePost(req.params.idPost);
  return post;
};
export const hideAllPosts = async (req, res) => {
  if (!req.body.idUser) {
    res.status(400).json({ message: "Bad request, data empty" });
  }
  const post = await services.hideAllPosts(req.body.idUser);
  return post;
};
