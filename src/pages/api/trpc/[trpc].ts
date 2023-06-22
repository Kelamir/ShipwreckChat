/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import * as trpcNext from '@trpc/server/adapters/next';
import { publicProcedure, router } from '@/server/trpc';
import { z } from 'zod';
import { useUser } from '@auth0/nextjs-auth0/client';
import { PrismaClient } from '@prisma/client';
import { TRPCError } from '@trpc/server';

const prisma = new PrismaClient();

const appRouter = router({
  storeUser: publicProcedure
    .input(
      z.object({
        auth0Id: z.string(),
        email: z.string(),
        username: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const existingUser = await prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new TRPCError({
          message: 'User already exists',
          code: 'PRECONDITION_FAILED',
        });
      }

      const user = await prisma.user.create({
        data: {
          auth0Id: input.auth0Id,
          email: input.email,
          username: input.username,
        },
      });
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
