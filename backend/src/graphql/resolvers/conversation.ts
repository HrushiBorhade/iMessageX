import { GraphQLContext } from "../../utils/types";
const resolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantIds: Array<string> },
      context: GraphQLContext
    ) => {
      console.log("Inside Create Conversation");
    },
  },
};

export default resolvers;
