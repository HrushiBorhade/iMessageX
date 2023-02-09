import { Button } from "@chakra-ui/react";
import React from "react";
import { signOut } from "next-auth/react";
type ChatProps = {};

const Chat: React.FC<ChatProps> = () => {
  return (
    <div>
      Chat
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};
export default Chat;
