import * as bcrypt from "bcrypt";

export const generateHash = async function (password) {
  try {
    const hash =await bcrypt.hash(password, 8, null);    
    return hash;
  } catch (error) {
    console.log(error);
  }
};

export const validatePassword = async function (password, user) {
  try {
    return await bcrypt.compare(password, user.password);
  } catch (error) {
    console.log(error);
  }
};
