import { Router } from "express";

const router = Router();

export default router
  .get("/", (req, res) => {
    //renderizado de inicio de sesion
    res.send("Bienvenido a TinderJob");
  })
  .post("/")
  .get("/timeline")
  .get("/settings");

