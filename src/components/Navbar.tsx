"use client";

import {
  Box,
  ListItem,
  UnorderedList,
  useColorModeValue,
  Image,
  Flex,
} from "@chakra-ui/react";
import { ColorModeButton } from "./ColorModeButton";

export const Navbar: React.FC = () => {
  const logo = useColorModeValue("/logo-dark.svg", "/logo-light.svg");

  return (
    <Flex
      as="nav"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      height="64px"
      paddingX={4}
      bgColor="transparent"
    >
      <Image src={logo} width="128px" />
      <UnorderedList
        listStyleType="none"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        width={["200px", "350px", "500px"]}
        display={["none", "grid", "grid"]}
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
    </Flex>
  );
};
