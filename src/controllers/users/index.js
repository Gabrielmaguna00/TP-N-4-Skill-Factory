import * as service from "../../services/users/index.js";
import { deletemany } from "../../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await service.getAllUsers();
  res.status(200).json(users);
};

export const getOneUser = async (req, res) => {
  const user = await service.getOneUser(req.params.name);
  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  const user = await service.createUser(req.body);
  res.status(200).json(user);
};

export const updateUser = async (req, res) => {
  const user = await service.updateUser(req.params.id, req.body);
  res.status(200).json(user);
};

export const desactiveUser = async (req, res) => {
  const user = await service.desactiveUser(req.params.id);
  res.status(200).json(user);
};

export const activeUser = async (req, res) => {
  const user = await service.activeUser(req.params.id);
  res.status(200).json(user);
};
