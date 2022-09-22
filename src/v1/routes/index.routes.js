import { Router } from "express";
import { isLoggedIn } from "../../utils/isLoged.js";

const router = Router();

export default router
  .get("/", isLoggedIn, (req, res) => {
    res.send("Bienvenido a TinderJob");
  })
  .get("/profile", isLoggedIn)
  .get("/timeline", isLoggedIn)
  .get("/settings", isLoggedIn);
