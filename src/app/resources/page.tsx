"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
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
        position="relative"
        overflowX="hidden"
        boxShadow="lg"
        width="100%"
      >
        <Box height="800px" pt={16} px={[4, 4, 8]}>
          Nothing yet!
        </Box>
        <ContactUs />
        <Footer />
      </Box>
    </Box>
  );
}
