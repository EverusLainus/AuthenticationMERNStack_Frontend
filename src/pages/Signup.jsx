import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

    var userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:3001/auth/signup", userDetails)
      .then((response) => {
        console.log(response);
        // Handle response
        console.log(response.data);
        setAlertMessage("Signup Successful");
        navigate("/Login");
      })
      .catch(function (error) {
        console.log(error);
        setAlertMessage("Signup Failed");
      });
  };

  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={"#FDF6FA"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Signup </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={10}>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  style={{ border: "0.01em solid black" }}
                  ref={emailRef}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  style={{ border: "0.01em solid black" }}
                  ref={passwordRef}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
                {alertMessage ? <Text>{alertMessage || ""}</Text> : " "}
                <Button
                  size="lg"
                  type="submit"
                  bg="#3F3038"
                  color={"white"}
                  _hover={{
                    bg: "#F361AF",
                  }}
                  p={3}
                >
                  Signup
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
