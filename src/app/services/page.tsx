"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  Divider,
  useColorModeValue,
  Text,
  Heading,
} from "@chakra-ui/react";
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
          <Divider borderColor={textColor} mb={2} />
          <ServicesGrid
            textColor={textColor}
            services={getServices(iconMode)}
            showPrices={true}
          />
        </Box>
        <Box padding={[4, 4, 8]} mb={16}>
          <Heading as="h3" size="md" mb={4}>
            ***Cancellation notice
          </Heading>
          <Text as="p">
            We kindly ask that you provide at least a 24-hour notice if you need
            to cancel or reschedule your appointment with us. In the event of a
            late cancellation or missed appointment, the full charge of the
            scheduled service will be applied. Thank you for your understanding
            and cooperation. Should you have any questions or need to make
            changes to your appointment, please don't hesitate to contact us.
          </Text>
        </Box>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
