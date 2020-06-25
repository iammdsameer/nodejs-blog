const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const mongoose = require("mongoose");

// models
const Blog = require("./models/blog");

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
  Blog.find()
    .then((blogs) => {
      res.render("index.html", { title: "Blogs", blogs });
    })
    .catch((err) => console.log(err));
});

app.get("/add", (req, res) => {
  const newBlog = new Blog({
    title: "Namaste Nepal",
    teaser: "Nepal is beautiful",
    content:
      "Nepal is ... oh my god... not getting words that suits it better..",
  });
  newBlog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
