import { avatarRegex, emailRegex, phoneRegex } from "../../utils/regex.js";
import { deletemany } from "../../models/User.js";


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

export const deletemanys = async (req, res) => {
  const users = await deletemany();
  res.status(200).json("OK!");
};
