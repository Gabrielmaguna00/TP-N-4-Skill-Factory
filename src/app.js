import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import morgan from "morgan";
import cors from "cors";
import { createClient } from "redis";
import login from "./api/routes/login.js";
import register from "./api/routes/register.js";
import logout from "./api/routes/logOut.js";
import post from "./api/routes/posts.js";
import user from "./api/routes/users.js";
import v1 from "./v1/routes/index.routes.js";
import "./auth/strategy.js";
import "./auth/oauth-strategy.js";
import path from 'path';
import {fileURLToPath} from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.join(path.dirname(__filename));
console.log('directory-name 👉️', __dirname);

//Motor de plantillas
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs')

app.use(express.static(__dirname + "/public"))

//Conexion a redis
const client = createClient({
  host: "127.0.0.1",
  port: 6379,
});
(async function () {
  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect();
  console.log("Conectado a redis");
})();

// Inicializaciones
dotenv.config();
app.use(morgan("dev"));
app.use(cors());
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


app.use("/", (req, res)=>{
  let prueba="HOLA"
  res.render("prueba", {prueba})
})
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/logout", logout);
app.use("/api/post", post);
app.use("/api/user", user);
app.use("/v1", v1);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
// export default app;
