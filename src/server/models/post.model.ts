import mongoose from "mongoose";

import { type IPost } from "../types/post.type";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
    },
    content: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);

export default Post;
