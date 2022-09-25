import * as post from "../../models/Post.js";

export const getAllPosts = async () => {
  const posts = post.getAllPosts();
  return posts;
};
export const getOnePost = async (idPost) => {
  const post = post.getOnePost(idPost);
  return post;
};
export const getUserPosts = async (idUser) => {
  const posts = post.getUserPosts(idUser);
  return posts;
};
export const createPost = async (data) => {
  const post = post.createPost(data);
  return post;
};
export const updatePost = async (idPost, data) => {
  const post = post.updatePost(idPost, data);
  return post;
};
export const hidePost = async (idPost) => {
  const post = post.hidePost(idPost);
  return post;
};
export const visiblePost = async (idPost) => {
  const post = post.visiblePost(idPost);
  return post;
};
export const hideAllPosts = async (idUser) => {
  const post = post.hideAllPosts(idUser);
  return post;
};
