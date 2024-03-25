"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);

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
        width="100%"
      >
        <Hero
          title="Patient Resources"
          description="More information to help our patients stay as informed and connected as possible."
        />
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
