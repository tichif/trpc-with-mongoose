import { Schema, model } from "mongoose";

import { type IPost } from "../types/post.type";

const postSchema = new Schema(
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

const Post = model<IPost>("post", postSchema);

export default Post;
