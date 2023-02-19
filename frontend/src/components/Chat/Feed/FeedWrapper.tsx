import { Session } from "next-auth";
import React from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
type FeedWrapperProps = {
  session: Session;
};

const FeedWrapper: React.FC<FeedWrapperProps> = () => {
  const router = useRouter();
  const { conversationId } = router.query;
  return (
    <Flex
      display={{ base: conversationId ? "flex" : "none", md: "flex" }}
      width="100%"
      direction="column"
    >
      {conversationId ? (
        <Flex>{conversationId}</Flex>
      ) : (
        <div>No Conversation Selected</div>
      )}
    </Flex>
  );
};
export default FeedWrapper;
