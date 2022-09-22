import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { createUser, findUserGoogleID } from "../models/User.js";
import { uniqueID } from "../utils/uniqueID.js";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/register/redirect/google",
      scope: ["profile", "email"],
      state: true,
    },
    async function (accessToken, refreshToken, profile, done) {
      //redis!
      // const user = profile
      const user = await findUserGoogleID(profile._json.email, profile.id);

      if (user) return done(null, user); //Si lo encuentra, devuelve el usuario (lo envía al req.user)

      const newUser = {
        name: profile._json.name,
        google_id: profile._json.sub,
        email: profile._json.email,
        avatar: profile._json.picture,
        id: uniqueID(profile._json.email),
      };
      let savedUser = fieldsCompletedGoogle(newUser);
      savedUser = await createUser(savedUser);

      done(null, savedUser); //Si no lo encuentra, lo crea y lo devuelve (lo envía al req.user)
    }
  )
);

export const fieldsCompletedGoogle = (newUser) => {
  if (!newUser.name || !newUser.email || !newUser.google_id) {
    return res.status(400).json({
      message: "Please provide all required fields",
    });
  }
  return newUser;
};

export default passport;
