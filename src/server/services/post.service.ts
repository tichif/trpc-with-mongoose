import { FilterQuery, QueryOptions } from "mongoose";

import Post from "../models/post.model";
import type { IPost } from "../types/post.type";

export async function createPost(input: IPostInput): Promise<IPost> {
  return await Post.create(input);
}

export async function getPosts(
  query: FilterQuery<IPost>,
  limit: number,
  skip: number,
  sort = "-createdAt",
  select?: string
): Promise<IPost[]> {
  if (select) {
    return await Post.find(query)
      .select(select)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  } else {
    return await Post.find(query).sort(sort).skip(skip).limit(limit);
  }
}
