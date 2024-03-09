"use client";

import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/sections/Services";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/ServicesSpotlight";

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
        <Hero
          title="Our Services"
          description="We offer a wide variety of services, all of which are tailored just for YOU."
        />
        <ServicesSpotlight />
        <Services title="All Services" />
        <ContactUs />
        <Footer />
      </Box>
    </Box>
  );
}
