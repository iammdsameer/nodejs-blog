const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const mongoose = require("mongoose");

// models
const Blog = require("./models/blog");

require("dotenv").config();

nunjucks.configure("views", { autoescape: true, express: app });

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

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
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index.html", { title: "Blogs", blogs });
    })
    .catch((err) => console.log(err));
});

app.post("/blogs", (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then(res.redirect("/blogs"))
    .catch((err) => console.log(err));
});
