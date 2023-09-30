/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';
import { Users,Problems } from 'db/src';
// const appRouter = router({
//   greeting: publicProcedure
//     // This is the input schema of your procedure
//     // 💡 Tip: Try changing this and see type errors on the client straight away
//     .input(
//       z.object({
//         name: z.string().nullish(),
//       }),
//     )
//     .query(({ input }) => {
//       // This is what you're returning to your client
//       return {
//         text: `hello ${input?.name ?? 'world'}`,
//         // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
//       };
//     }),
//   // 💡 Tip: Try adding a new procedure here and see if you can use it in the client!
//   getUser: publicProcedure.query(() => {
//     return { id: '1', name: 'bob' };
//   }),
// });

export const appRouter = router({
  allProblems: publicProcedure
      .query(async () => {
          const problems = await Users.find({});
          return {
              "problemSet": problems
          };
      }),
  byId: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
          const problem = await Problems.find({ _id: input.id });
          console.log("problem = ",problem)
          return {
              problem
          }
      }),
  create: publicProcedure
      .input(
          z.object({
              title: z.string().min(1),
              description: z.string().min(1),
              examples: z.string(),
              acceptance: z.string(),
              difficulty: z.string()
          }),
      )
      .mutation(async ({ input }) => {
          await Problems.insertMany(input);
      }),
  delete: publicProcedure
      .input(z.string())
      .mutation(async ({ input }) => {
          await Problems.deleteMany({ id: input });
      }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
