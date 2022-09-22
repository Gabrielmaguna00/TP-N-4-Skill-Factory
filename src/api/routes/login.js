import { Router } from "express";
import passport from "passport";
import { successfullogin } from "../../controllers/login/index.js";

const router = Router();

export default router
  .get("/", (req, res) => {
    res.send(
      '<p>LOGIN RENDER</p><a href="http://localhost:3000/api/login/google">Inicio con Google</a>'
    );
  })
  .get("/", (req, res) => {
    res.send("Error al crear el usuario o login");
  })
  .post(
    "/",
    successfullogin,
    passport.authenticate("local-login", {
      failureRedirect: "/",
      passReqToCallback: true,
    }),
    (req, res) => {
      res.redirect("http://localhost:3000/v1");
    }
  )
  .get("/google", passport.authenticate("google"))
  .get(
    "/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "fail",
      failureMessage: true,
    }),
    (req, res) => {
      res.redirect("http://localhost:3000/v1");
    }
  )
  .get("/timeline")
  .get("/settings");
