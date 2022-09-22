import { Router } from "express";
const router = Router();

export default router.post("/logout", async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/api/login");
  });
});
