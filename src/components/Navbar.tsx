"use client";

import {
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";

export const Navbar: React.FC = () => {
  const logo = useColorModeValue("/logo-dark.svg", "/logo-light.svg");

  return (
    <Box
      as="nav"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height="64px"
      paddingX={4}
    >
      <Image src={logo} width="128px" />
      <UnorderedList
        listStyleType="none"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        width="500px"
        justifyContent="space-between"
        ml={0}
        paddingX={0}
      >
        <ListItem>Home</ListItem>
        <ListItem>About Us</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Contact</ListItem>
      </UnorderedList>
      <ColorModeButton />
    </Box>
  );
};
