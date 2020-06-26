// models
const Blog = require("../models/blog");

const all_blogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.render("index.html", { title: "Blogs", blogs });
    })
    .catch((err) => console.log(err));
};

const create_blog = (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog
    .save()
    .then(res.redirect("/blogs"))
    .catch((err) => console.log(err));
};

const detail_blog = (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => res.render("post.html", { blog, title: "Post" }))
    .catch((err) => console.log(err));
};

const delete_blog = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => res.json({ redirect: "/blogs" }))
    .catch((err) => console.log(err));
};

module.exports = {
  all_blogs,
  create_blog,
  detail_blog,
  delete_blog,
};
