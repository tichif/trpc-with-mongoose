import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.db.post.create(input);

      return post;
    }),

  getAllPost: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.getAll({}, 10, 0);

    return posts;
  }),
});
