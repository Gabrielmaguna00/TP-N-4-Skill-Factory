import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import morgan from "morgan";
import cors from "cors";
import login from "./api/routes/login.js";
import register from "./api/routes/register.js";
import "./auth/strategy.js";

const app = express();

// Inicializaciones
dotenv.config("*");
app.use(morgan("dev"));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/register", register);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// export default app;
