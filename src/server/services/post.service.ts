import { FilterQuery, QueryOptions } from "mongoose";

import Post from "../models/post.model";

export async function createPost(input: IPostInput) {
  return Post.create(input);
}
