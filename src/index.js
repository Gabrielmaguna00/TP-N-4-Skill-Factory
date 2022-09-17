import app from "./app.js";
import https from "https";
import * as fs from "fs";
import { log } from "console";

https
  .createServer(
    {
      key: fs.readFile("./src/certs/key.pem", (error, data) => {
        if (error) {
          console.log(error);
        }
        console.log("key aprobada!");
        return data;
      }),
      cert: fs.readFile("./src/certs/certificate.pem", (error, data) => {
        if (error) {
          console.log(error);
        }
        console.log("certificado aprobado!")
        return data;
      }),
    },
    app
  )
  .listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
