const express = require("express");
const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/", require("./src/routes"));
app.use("/static", express.static("public"));

app.listen(8080);
