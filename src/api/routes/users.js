import { Router } from "express";
import * as controller from "../../controllers/users/index.js";
const router = Router();

export default router
  .get("/", controller.getAllUsers)
  .get("/:id", controller.getOneUser)
  .get("/search/:name", controller.getNameUser)
  .post("/", controller.createUser)
  .put("/", controller.updateUser)
  .put("/active/:id", controller.activeUser)
  .put("/desactive/:id", controller.desactiveUser);
