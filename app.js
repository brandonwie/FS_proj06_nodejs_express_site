const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/about", (req, res, next) => {
  res.render("about");
});

app.get("project", (req, res, next) => {
  res.render("project");
});

app.listen(3000, console.log("The app is running on port 3000"));
