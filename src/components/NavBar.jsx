import { Link, useNavigate } from "react-router-dom";
("use client");

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  {
    path: "/",
    name: "/home",
  },
  {
    path: "/",
    name: "/Profile",
  },
  {
    path: "/",
    name: "/Themes",
  },
];

const NavLink = () => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    ></Box>
  );
};

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  function handleHome() {
    <Link to="/Home" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <>
      <Box bg="#3F3038" px={4} color="#FDF6FA">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink to={link.path} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={handleHome}
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
            >
              <Link to="/">Home</Link>
            </Button>

            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              <Link to="/Profile">Profile</Link>
            </Button>

            {localStorage.getItem("site") ? (
              <Button
                variant={"solid"}
                colorScheme={"teal"}
                size={"sm"}
                mr={4}
                onClick={handleLogout}
              >
                <Link to="/Logout">Logout</Link>
              </Button>
            ) : (
              <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
                <Link to="/Login">Login</Link>
              </Button>
            )}

            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              {localStorage.getItem("site") ? (
                <p></p>
              ) : (
                <Link to="/signup">Signup</Link>
              )}
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                {/* <Avatar size={"2xl"} src={"#"} /> */}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <Link to="/Signup">Signup</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  {localStorage.getItem("site") ? (
                    <Link to="/Logout">Logout</Link>
                  ) : (
                    <Link to="/Login">Login</Link>
                  )}
                </MenuItem>
                <MenuItem>
                  {localStorage.getItem("site") ? (
                    <p></p>
                  ) : (
                    <Link to="/Portfolio">Get started</Link>
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.path} key={link.name}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
