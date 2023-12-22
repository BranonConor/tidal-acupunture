"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");

  return (
    <Box
      as="main"
      bg={bg}
      minHeight="100vh"
      maxWidth="100%"
      width="100%"
      padding="0"
      display="flex"
      justifyContent="center"
      boxSizing="border-box"
    >
      <Navbar />
      <Box
        maxWidth="1440px"
        position="relative"
        overflowX="hidden"
        px={[4, 8]}
        pt={24}
      >
        COMING SOON! :)
      </Box>
    </Box>
  );
}
