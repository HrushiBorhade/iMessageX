import { CreateUsernameData, CreateUsernameVariables } from "@/utils/types";
import { useMutation } from "@apollo/client";
import {
  Button,
  Center,
  Stack,
  Text,
  Image,
  Input,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { Session } from "@prisma/client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import UserOperations from "../../graphql/operations/user";
type AuthProps = {
  session: Session | null;
  reloadSession: () => void;
};

const Auth: React.FC<AuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState("");

  const [createUsername, { loading, error, data }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(UserOperations.Mutations.createUsername);
  const onSubmit = async () => {
    if (!username) return;
    try {
      await createUsername({ variables: { username } });
    } catch (error: any) {
      console.log("onSubmit error:", error.message);
    }
    console.log("HERE IS DATA:", data);
  };
  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a Username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(event.target.value)
              }
            />
            <Button onClick={onSubmit} width="100%">
              Save
            </Button>
          </>
        ) : (
          <>
            <Image
              height={100}
              src="/images/imessage-logo.png"
              alt="iMessage logo"
            />
            <Text fontSize="4xl">iMessageX</Text>
            {/* <Text width="70%" align="center">
              By Hrushi
            </Text> */}
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image
                  height="20px"
                  src="/images/googlelogo.png"
                  alt="google logo"
                />
              }
            >
              Continue with Google
            </Button>
            <Text fontWeight="bold" color="gray.400" align="center">
              By Hrushi
            </Text>
          </>
        )}
      </Stack>
    </Center>
  );
};
export default Auth;
