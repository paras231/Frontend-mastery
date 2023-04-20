import express from "express";
import Blog from "./model/Blog.js";

const router = express.Router();

router.post("/create-blog", async (req, res) => {
  try {
    const { content } = req.body;
    const newBlog = await Blog.create({
      content: content,
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

export default router;
