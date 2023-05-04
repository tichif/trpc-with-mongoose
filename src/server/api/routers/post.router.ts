import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createPost } from "~/server/services/post.service";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const post = await createPost(input);

      return post;
    }),
});
