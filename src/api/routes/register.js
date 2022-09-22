import { Router } from "express";
import passport from "passport";
import {
  deletemanys,
  fieldsCompleted,
  logOut,
  successfullogin,
} from "../../controllers/users/index.js";

const router = Router();
export default router
  .get("/bienvenido", isLoggedIn, async (req, res) => {
    //renderizado de registro
    res.send("Bienvenido register");
  })
  .get("/fail", (req, res) => {
    //renderizado de registro
    res.send("Error al crear el usuario o login");
  })
  .get("/", (req, res) => {
    res.send("register render");
  })
  .post(
    "/",
    fieldsCompleted,
    passport.authenticate("local-register", {
      successRedirect: "register/bienvenido",
      failureRedirect: "register/fail",
      passReqToCallBack: true,
    })
  )
  .delete("/delete", deletemanys)
  .post(
    "/login",
    successfullogin,
    passport.authenticate("local-login", {
      successRedirect: "bienvenido",
      failureRedirect: "fail",
      passReqToCallback: true,
    })
  )
  .get("/google/login", (req, res) => {
    res.send(
      '<p>REGISTER RENDER</p><a href="http://localhost:3000/api/register/google">Inicio con Google</a>'
    );
  })
  .get("/google", passport.authenticate("google"))
  .get(
    "/redirect/google",
    passport.authenticate("google", {
      failureRedirect: "fail",
      failureMessage: true,
    }),
    function (req, res) {
      res.redirect("/api/register/bienvenido");
    }
  )

  .get("/ok", (req, res) => {
    res.send("OK!");
  })
  .post("/logout", logOut);
async function isLoggedIn(req, res, next) {
  if (await req.isAuthenticated()) {
    return next();
  }
  res.status(404).send("error login");
}
