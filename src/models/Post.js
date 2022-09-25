import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};
export const getOnePost = async (idPost) => {
  const post = await prisma.post.findFirst({
    where: {
      id: idPost,
    },
  });
  return post;
};
export const getUserPosts = async (idUser) => {
  const posts = await prisma.post.findMany({
    where: { author_id: idUser },
  });
};
export const createPost = async (data) => {
  const post = await prisma.post.create({
    data,
  });
  return post;
};
export const updatePost = async (idPost, data) => {
  const updatePost = await prisma.post.update({
    where: { id: idPost },
    data,
  });
  return updatePost;
};
export const hidePost = async (idPost) => {
  const hidePost = await prisma.post.update({
    where: { id: idPost },
    data: { visible: false },
  });
};
export const visiblePost = async (idPost) => {
  const hidePost = await prisma.post.update({
    where: { id: idPost },
    data: { visible: true },
  });
};
export const hideAllPosts = async (idUser) => {
  //Hide posts from a deactivated user
  const posts = await prisma.post.updateMany({
    where: { author_id: idUser },
    data: { visible: false },
  });
};
