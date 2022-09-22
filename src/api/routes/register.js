import { Router } from "express";
import passport from "passport";
import { deletemanys, fieldsCompleted } from "../../controllers/register/index.js";

const router = Router();
export default router
  .get("/", (req, res) => {
    res.send("Register render");
  })
  .post(
    "/",
    fieldsCompleted,
    passport.authenticate("local-register", {
      failureRedirect: "register/fail",
      passReqToCallBack: true,
    }),
    (req, res) => {
      res.redirect("http://localhost:3000/v1");
    }
  )
  .delete("/delete", deletemanys);
