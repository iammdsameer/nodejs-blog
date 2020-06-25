const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

nunjucks.configure("views", { autoescape: true, express: app });

app.use(express.static("public"));

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(3300))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  res.render("index.html", { title: "Blogs" });
});
