import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getAllUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export async function getOneUser(name) {
  const user = await prisma.user.findOne({
    where: {
      name: name,
    },
  });
}

export async function getOneUserDeserialize(id) {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  return user;
}

export async function createUser(data) {
  const createdUser = await prisma.user.create({
    data,
  });
  return createdUser;
}

export async function updateUser(id, data) {
  const updatedUser = await prisma.user.updateOne({
    where: {
      id: id,
    },
    data: data,
  });
  return updatedUser;
}

export async function activeUser(id) {
  const activeUser = await prisma.user.updateOne({
    where: {
      id: id,
    },
    data: {
      active: true,
    },
  });
  return activeUser;
}

export async function desactiveUser(id) {
  const deactiveUser = await prisma.user.updateOne({
    where: {
      id: id,
    },
    data: {
      active: false,
    },
  });
  return deactiveUser;
}

export async function findUserMail(email) {
  const user = await prisma.user.findFirst({
    where: {
      email,
      google_id: null,
    },
  });
  return user;
}

export async function findUserGoogleID(email, google_id) {
  const user = await prisma.user.findFirst({
    where: {
      email,
      google_id,
    },
  });
  return user;
}

export async function deletemany() {
  const user = await prisma.user.deleteMany();
  return user;
}
