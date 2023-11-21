"use client";

import { Navbar } from "@/components/Navbar";
import { Box, Image, useColorModeValue } from "@chakra-ui/react";

export default function Home() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");

  return (
    <Box
      as="main"
      bg={bg}
      minHeight="100vh"
      maxWidth="100%"
      minWidth="100%"
      padding="0"
    >
      <Navbar />
    </Box>
  );
}
