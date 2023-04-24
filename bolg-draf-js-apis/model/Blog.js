import mongoose, { mongo } from "mongoose";

const blogSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.model("Blog", blogSchema);
