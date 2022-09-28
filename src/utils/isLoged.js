export async function isLoggedIn(req, res, next) {
  if (await req.isAuthenticated()) {
    console.log("logueado!");
    return next();
  }
  res.status(404).send("No login");
}
