import express from "express";
import Blog from "./model/Blog.js";

const router = express.Router();

router.post("/create-blog", async (req, res) => {
  try {
    const { content, title } = req.body;
    const newBlog = await Blog.create({
      content: content,
      title,
    });
    console.log(content);
    res.status(200).json({ message: "Blog Created", newBlog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/get/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// get a single blog->

router.get("/get/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json({ blog });
  } catch (error) {
    res.status(400).json({ error });
  }
});

export default router;
