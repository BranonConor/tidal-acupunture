"use client";

import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { OurTeam } from "@/components/sections/OurTeam";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/services/Services";
import { Box, useColorModeValue, Flex, Button } from "@chakra-ui/react";
import { Info } from "@/components/sections/Info";
import Link from "next/link";
import { ContactUs } from "@/components/sections/ContactUs";

export default function Home() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const radius = useColorModeValue(0, 16);

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
          description="TIDAL is a Southern Californian acupuncture clinic
          delivering the best care Eastern Medicine has to offer."
          ctaSection={
            <Flex my={4}>
              <Button as={Link} href="/services" variant="primary" mr={2}>
                What we do
              </Button>
              <Button as={Link} href="/team" variant="secondary">
                Who We Are
              </Button>
            </Flex>
          }
        />
        <WhoWeAre />
        <OurTeam />
        <Services title="Our Services" />
        <Info />
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
