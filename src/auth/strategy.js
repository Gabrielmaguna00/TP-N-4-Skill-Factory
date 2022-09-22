import passport from "passport";
import dotenv from "dotenv";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// import { generateHash, validatePassword } from "../utils/passwordHash.js";
import {
  createUser,
  findUserGoogleID,
  findUserMail,
  getOneUserDeserialize,
} from "../models/User.js";
import { uniqueID } from "../utils/uniqueID.js";
import { generateHash, validatePassword } from "../utils/passwordHash.js";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await getOneUserDeserialize(id);
  done(null, user.id);
});

passport.use(
  "local-register",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const thereIsUser = await findUserMail(email);
        //Buscamos un usuario con el email recibido en el parámetro

        if (thereIsUser) {
          //Si encontró uno...
          console.log({ message: "Username is already taken." });
          return done(null, false, { message: "Username is already taken." }); //Quiere decir que ya existe un usuario con ese email (No podemos crear la cuenta)
        } //done es para finalizar, se le pasa: error, usuario, opciones
        else {
          //Si no encontró a ninguno...
          let password = await generateHash(req.body.password);
          const newUser = await {
            ...req.body,
            id: uniqueID(req.body.email),
            password,
          };
          const user = await createUser(newUser);
          return done(null, user); //Terminamos, no le pasamos ningún error y le pasamos el usuario.
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const thereIsUser = await findUserMail(email);
      if (!thereIsUser) {
        return done(null, false, { message: "User not found!" });
      }

      if (!validatePassword(password, thereIsUser)) {
        return done(null, false, { message: "Password doesn't match" });
      }
      return done(null, thereIsUser, { message: "Successful login" });
    }
  )
);
