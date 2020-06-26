const express = require("express");
const router = express.Router();

const blogController = require("../controllers/blogs");

router.get("/", blogController.all_blogs);

router.post("/", blogController.create_blog);

router.get("/post/:id", blogController.detail_blog);

router.delete("/post/:id", blogController.delete_blog);

module.exports = router;
