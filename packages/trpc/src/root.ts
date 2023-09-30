import { Problems } from 'db/src';
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
    allProblems: publicProcedure
        .query(async () => {
            const problems = await Problems.find({});
            
            return {
                problemSet: problems
            };
        }),
    byId: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ input }) => {
            const problem = await Problems.find({ _id: input.id });
            
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
        .mutation(async ({ ctx, input }) => {
            await Problems.insertMany(input);
        }),
    delete: publicProcedure
        .input(z.string())
        .mutation(async ({ input }) => {
            await Problems.deleteMany({ id: input });
        }),
});

// export type definition of API
export type AppRouter = typeof appRouter;