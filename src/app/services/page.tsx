"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue, Heading } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { getServices } from "@/components/sections/services/getServices";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.white");
  const iconMode = useColorModeValue("dark", "light");
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
          title="Our Services"
          description="We offer a wide variety of services, all of which are tailored just for YOU."
        />
        <ServicesSpotlight />
        <Box py={16} px={[4, 4, 8]}>
          <Heading as="h2" size="2xl">
            All Services
          </Heading>
          <ServicesGrid
            textColor={textColor}
            services={getServices(iconMode)}
            showPrices={true}
          />
        </Box>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
