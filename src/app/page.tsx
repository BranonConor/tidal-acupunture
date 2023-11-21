"use client";

import { Navbar } from "@/components/Navbar";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { Hero } from "@/components/sections/Hero";
import { Box, useColorModeValue } from "@chakra-ui/react";

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
      display="flex"
      justifyContent="center"
    >
      <Box maxWidth="1440px">
        <Navbar />
        <Hero />
        <AboutStrip />
      </Box>
    </Box>
  );
}
