import { Box, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import React, { useState } from "react";
import ConversationModal from "./Modal/Modal";

type ConversationListProps = {
  session: Session;
};

const ConversationList: React.FC<ConversationListProps> = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <Box
      width={{ base: "100%", md: "400px" }}
      position="relative"
      height="100%"
      overflow="hidden"
    >
      <Box
        py={2}
        px={4}
        mb={4}
        bg="blackAlpha.300"
        borderRadius={4}
        cursor="pointer"
        onClick={onOpen}
      >
        <Text textAlign="center" color="whiteAlpha.800" fontWeight={500}>
          Find or start a conversation
        </Text>
      </Box>
      <ConversationModal session={session} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
export default ConversationList;
