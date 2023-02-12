import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { signOut } from "next-auth/react";
import ConversationWrapper from "./Conversations/ConversationWrapper";
import { Session } from "next-auth";
import FeedWrapper from "./Feed/FeedWrapper";
type ChatProps = { session: Session };

const Chat: React.FC<ChatProps> = ({ session }) => {
  return (
    <Flex height="100vh">
      <ConversationWrapper session={session} />
      <FeedWrapper session={session} />
    </Flex>
  );
};
export default Chat;
