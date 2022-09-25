import * as User from "../../models/User.js";
export const getAllUsers = () => {
  const users = User.getAllUsers();
  return users;
};

export const getOneUser = (id) => {
  const user = User.getOneUser(id);
  return user;
};

export const getNameUser = (name) => {
  const users = User.getNameUser(name);
  return users;
};

export const createUser = (newUser) => {
  const user = User.createUser(newUser);
  return user;
};

export const updateUser = (id, newUser) => {
  const user = User.updateUser(id, newUser);
  return user;
};

export const desactiveUser = (id) => {
  const user = User.desactiveUser(id);
  return user;
};

export const activeUser = (id) => {
  const user = User.activeUser(id);
  return user;
};
