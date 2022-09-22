import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://www.example.com/oauth2/redirect/google",
      // passReqToCallback: true,
      scope: ["profile"],
      state: true,
    },
    async function (accessToken, refreshToken, profile, done) {
       console.log(profile);
      //redis!
      // const user = profile

      if (user) return done(null, user); //Si lo encuentra, devuelve el usuario (lo envía al req.user)

      console.log(profile);
      // const newUser = new userModel({
      //   username: profile.displayName,
      //   googleId: profile.id,
      // });

      // const savedUser = await newUser.save();

      done(null, savedUser); //Si no lo encuentra, lo crea y lo devuelve (lo envía al req.user)
    }
  )
);
