import { CreateUsernameResponse, GraphQLContext } from "../../utils/types";
const resolvers = {
  Query: {
    searchUsers: () => {
      console.log("Inside SEARCH USERS");
    },
  },
  Mutation: {
    createUsername: async (
      _: any,
      args: { username: string },
      context: GraphQLContext
    ): Promise<CreateUsernameResponse> => {
      const { username } = args;
      const { session, prisma } = context;

      if (!session?.user) {
        return {
          error: "Not Authorized",
        };
      }

      const { id: userId } = session.user;
      try {
        /**
         * Check if username taken by another user
         */
        const existingUser = await prisma.user.findUnique({
          where: {
            username,
          },
        });

        if (existingUser) {
          return {
            error: "Username already taken. Try another",
          };
        }

        /**
         * update username
         */
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            username,
          },
        });

        return { success: true };
      } catch (error: any) {
        console.log("createUsername error", error);
        return {
          error: error?.message as string,
        };
      }
    },
  },
  // Subscription: {},
};

export default resolvers;
