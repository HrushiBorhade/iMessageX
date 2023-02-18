import { gql } from "apollo-server-core";
const typeDefs = gql`
  type Mutation {
    createConversation(participantIds: [String]): CreateConversationResponse
  }
  type CreateConversationResponse {
    conversationId: string
  }
`;
