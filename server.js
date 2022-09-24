//import third-party nodejs module Connect
const connect = require("connect");

//instaniate app-server
const app = connect();

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
