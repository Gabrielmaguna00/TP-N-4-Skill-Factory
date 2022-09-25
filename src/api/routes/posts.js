import { Router } from "express";
import * as controller from "../../controllers/posts/index.js";
import { isLoggedIn } from "../../utils/isLoged.js";
const router = Router();

export default router
  .get("/", isLoggedIn, controller.getAllPosts)
  .get("/:idPost", isLoggedIn, controller.getOnePost)
  .get("/user", isLoggedIn, controller.getUserPosts)
  .post("/create", isLoggedIn, controller.createPost)
  .put("/update/:idPost", isLoggedIn, controller.updatePost)
  .put("/desactive/:idPost", isLoggedIn, controller.hidePost)
  .put("/active/:idPost", isLoggedIn, controller.visiblePost)
  .put("/desactiveall", isLoggedIn, controller.hideAllPosts);
