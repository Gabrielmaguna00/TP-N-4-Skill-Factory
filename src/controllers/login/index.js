export const successfullogin = async (req, res, next) => {
  if (!req.body.password || !req.body.email) {
    return res.status(400).json({
      message: "Please provide all required fields",
    });
  }
  console.log("succes",req.body);
  next();
};
