import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import React, { useState } from "react";

interface ConversationModal {
  isOpen: boolean;
  onClose: () => void;
  session: Session;
}

const ConversationModal: React.FC<ConversationModal> = ({
  isOpen,
  onClose,
  session,
}) => {
  const [username, setUsername] = useState("");
  const {
    user: { id: userId },
  } = session;

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("from modal ", username);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md" }}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>Find or Create a Conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input
                  placeholder="Enter a username"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />
                <Button
                  width="100%"
                  type="submit"
                  // isLoading={}
                  disabled={!username}
                >
                  Search
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ConversationModal;
