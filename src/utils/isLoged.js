export async function isLoggedIn(req, res, next) {
  if (await req.isAuthenticated()) {
    return next();
  }
  res.status(404).send("error login");
}
