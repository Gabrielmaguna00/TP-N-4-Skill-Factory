import { Router } from "express";
import passport from "passport";
import { successfullogin } from "../../controllers/login/index.js";
import { isLoggedIn } from "../../utils/isLoged.js";

const router = Router();

export default router
  .get("/", (req, res) => {
    res.send(
      '<p>LOGIN RENDER</p><a href="http://localhost:3001/api/login/google">Inicio con Google</a>'
    );
  })
  .post(
    "/",
    successfullogin,
    passport.authenticate("local-login", {
      failureRedirect: "/",
      passReqToCallback: true,
    }),
    (req, res) => {
      res.json({msg:true});
    }
  )
  .get("/google", passport.authenticate("google"))
  .get(
    "/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "http://localhost:3000",
      failureMessage: true,
    }),
    isLoggedIn,
    (req, res) => {
      res.redirect("http://localhost:3000/home");
    }
  )
  .get("/timeline")
  .get("/settings");
