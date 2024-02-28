"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";

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
        width="100%"
        position="relative"
        overflowX="hidden"
        boxShadow="lg"
        bg={bg}
      >
        <Hero
          title="Who We Are"
          description="We're more than just a wellness destination. We're passionate and skilled healers."
        />
        <ContactUs />
        <Footer />
      </Box>
    </Box>
  );
}
