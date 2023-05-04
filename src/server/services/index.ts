import { createPost } from "./post.service";

// mongoose database
export const db = {
  // post collection
  post: {
    create: createPost,
  },
};
