// src/components/Navbar.jsx
import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import profileImage from "../assets/pic.jpeg";
import ExpandableAvatar from "./ExpandableAvatar";

const Links = ["Home", "About", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    color="white"
    _hover={{
      textDecoration: "teal.500",
      // bg: "white",
      color:"white"
    }}
    href={`/${children.toLowerCase()}`}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="teal.900" px={4} width="100%" style={{ backgroundColor: "teal.900" }}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          max="100%"
          // mx="auto"
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontWeight="bold" color="white">
              <ExpandableAvatar name="Manglesh Yadav" src={profileImage} />
              {/* <Avatar name="Manglesh Yadav" src={profileImage} /> */}
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} color="white">{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {/* <Button
              as={"a"}
              href="#contact"
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
            >
              Contact Me
            </Button> */}
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
