const express = require("express");
const nunjucks = require("nunjucks");
const app = express();
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogs");

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

// Blog Routes
app.use("/blogs", blogRoutes);
