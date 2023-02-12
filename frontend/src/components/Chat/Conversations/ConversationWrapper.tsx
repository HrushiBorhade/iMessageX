import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import React from "react";
import ConversationList from "./ConversationList";

type ConversationWrapperProps = {
  session: Session;
};

const ConversationWrapper: React.FC<ConversationWrapperProps> = ({
  session,
}) => {
  return (
    <Box
      width={{ base: "100%", md: "430px" }}
      flexDirection="column"
      bg="whiteAlpha.50"
      gap={4}
      py={6}
      px={3}
    >
      <ConversationList session={session} />
    </Box>
  );
};
export default ConversationWrapper;
