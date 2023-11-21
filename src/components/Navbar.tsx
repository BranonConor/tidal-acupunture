"use client";

import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

export const Navbar: React.FC = () => {
  return (
    <Box as="nav" width="100%">
      <UnorderedList
        listStyleType="none"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr"
        width="100%"
        justifyContent="space-between"
        ml={0}
        paddingX={4}
      >
        <ListItem textAlign="center">Home</ListItem>
        <ListItem textAlign="center">About Us</ListItem>
        <ListItem textAlign="center">Services</ListItem>
        <ListItem textAlign="center">Contact</ListItem>
      </UnorderedList>
    </Box>
  );
};
