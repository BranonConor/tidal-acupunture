"use client";

import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Box, useColorModeValue, Flex, Button } from "@chakra-ui/react";
import { Info } from "@/components/sections/Info";
import Link from "next/link";
import { ContactUs } from "@/components/sections/ContactUs";

export default function Home() {
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
        width="100%"
      >
        <Hero
          title="Acupuncture for all life's highs and lows."
          description="TIDAL is a boutique Southern Californian acupuncture clinic
          delivering the best care Eastern Medicine has to offer."
          ctaSection={
            <Flex my={4}>
              <Button as={Link} href="/services" variant="primary" mr={2}>
                What we do
              </Button>
              <Button as={Link} href="/resources" variant="secondary">
                Resources
              </Button>
            </Flex>
          }
        />
        <WhoWeAre />
        <OurTeam />
        <Services />
        <Info />
        <ContactUs />
        <Footer />
      </Box>
    </Box>
  );
}
