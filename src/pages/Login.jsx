import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
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

export function Login() {
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
      .post("http://localhost:3001/auth/login", userDetails)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        localStorage.setItem("site", response.data.token);
        setAlertMessage("Login Successful");
        navigate("/Home");
      })
      .catch(function (error) {
        console.log(error);
        setAlertMessage("Login Failed");
      });
  };

  return (
    <Flex minH={"90vh"} align={"center"} justify={"center"} bg={"#FDF6FA"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Login to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={"white"}
          boxShadow={"lg"}
          shadowColor="#FDAED8"
          p={8}
          fontFamily="sans-serif"
        >
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
                >
                  <Text> No account?</Text>
                  <Text color={"#F361AF"}>
                    {" "}
                    <Link to="/Signup">Signup</Link>
                  </Text>
                </Stack>
                {alertMessage ? <Text>{alertMessage || ""}</Text> : " "}

                <Button
                  size="lg"
                  bg={"#3F3038"}
                  color={"white"}
                  _hover={{
                    bg: "#F361AF",
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
