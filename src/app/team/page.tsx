"use client";

import { Navbar } from "@/components/Navbar";
import { OurTeam } from "@/components/sections/OurTeam";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";

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
        boxShadow="lg"
        pt={16}
        bg={bg}
      >
        <OurTeam />
        <Footer />
      </Box>
    </Box>
  );
}
