import * as service from "../../services/users/index.js";
import { avatarRegex, emailRegex, phoneRegex } from "../../utils/regex.js";
import { uniqueID } from "../../utils/uniqueID.js";
import { deletemany } from "../../models/User.js";

export const getAllUsers = async (req, res) => {
  const users = await service.getAllUsers();
  res.status(200).json(users);
};

export const getOneUser = async (req, res) => {
  const user = await service.getOneUser(req.params.name);
  res.status(200).json(user);
};

export const fieldsCompleted = async (req, res, next) => {
  const newUser = await req.body;
  if (!newUser.name || !newUser.email || !newUser.password) {
    return res.status(400).json({
      message: "Please provide all required fields",
    });
  }

  if (!emailRegex.test(newUser.email)) {
    //|| !avatarRegex.test(newUser.avatar
    return res.status(400).json({
      message: "Please provide valid data",
    });
  }
  next();
};

export const successfullogin = async (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({
      message: "Please provide all required fields",
    });
  }
  next();
};

export const logOut = async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/api/register");
  });
};

export const createUser = async (req, res) => {
  // const newUser = {
  //   ...req.body,
  //   id: uniqueID(req.body.email),
  // };

  // if (!newUser.name || !newUser.email || !newUser.password) {
  //   return res.status(400).json({
  //     message: "Please provide all required fields",
  //   });
  // }

  // if (newUser.phone) {
  //   !phoneRegex.test(newUser.phone)
  //     ? res.status(400).json({ message: "Please provide a valid phone number" })
  //     : null;
  // }

  // if (!emailRegex.test(newUser.email)) {
  //   //|| !avatarRegex.test(newUser.avatar
  //   return res.status(400).json({
  //     message: "Please provide valid data",
  //   });
  // }

  const user = await service.createUser(req.body);
  res.status(200).json(user);
};

export const updateUser = async (req, res) => {
  const user = await service.updateUser(req.params.id, req.body);
  res.status(200).json(user);
};

export const desactiveUser = async (req, res) => {
  const user = await service.deactiveUser(req.params.id);
  res.status(200).json(user);
};

export const activeUser = async (req, res) => {
  const user = await service.activeUser(req.params.id);
  res.status(200).json(user);
};

export const deletemanys = async (req, res) => {
  const users = await deletemany();
  res.status(200).json("OK!");
};
