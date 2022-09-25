import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getOneUser = async (name) => {
  const user = await prisma.user.findOne({
    where: {
      name: name,
    },
  });
};

export const getOneUserDeserialize = async (id) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  return user;
};

export const createUser = async (data) => {
  const createdUser = await prisma.user.create({
    data,
  });
  return createdUser;
};

export const updateUser = async (id, data) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
  return updatedUser;
};

export const activeUser = async (id) => {
  const activeUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      active: true,
    },
  });
  return activeUser;
};

export const desactiveUser = async (id) => {
  const desactiveUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      active: false,
    },
  });
  return desactiveUser;
};

export const findUserMail = async (email) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
      google_id: null,
    },
  });
  return user;
};

export const findUserGoogleID = async (email, google_id) => {
  const user = await prisma.user.findFirst({
    where: {
      email,
      google_id,
    },
  });
  return user;
};

export const deletemany = async () => {
  const user = await prisma.user.deleteMany();
  return user;
};
