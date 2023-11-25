"use client";

import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
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
      <Box maxWidth="1440px" position="relative">
        <Navbar />
        <Hero />
        <WhoWeAre />
        <OurTeam />
        <Services />
      </Box>
    </Box>
  );
}
