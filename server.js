//import express
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";

//ES Modules fix for __dirname
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

//instaniate app-server
const app = express();

//setup ViewEngine EJS
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  session({
    secret: "Mysecret",
    saveUninitialized: false,
    resave: false,
  })
);

//middleware
function helloIndex(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from NodeJS Application");
}
function helloHTML(req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> Hello from NodeJS Application as html</h1>");
}
function helloJSON(req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.end("{“message”: “Hello from NodeJS Application as json”}");
}

app.use("/html", helloHTML);
app.use("/json", helloJSON);

app.use("", helloIndex);

//run app
app.listen(3000);

console.log("Server running at http://localhost:3000");
