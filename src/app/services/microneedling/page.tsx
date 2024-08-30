"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { PageLayout } from "@/components/PageLayout";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const cardBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Microneedling"
        description="How it works, what to expect, and more!"
      />
      <Box
        maxWidth="1440px"
        position="relative"
        overflowX="hidden"
        width="100%"
      >
        <Box px={[4, 8]} pt={16} pb={[4, 8]} bg={cardBg} color={textColor}>
          <Heading as="h2">How Does Microneedling Work?</Heading>
          <Divider borderColor={textColor} mb={8} />
          <Text as="p" mb={8}>
            Ever wondered about the magic of microneedling? Microneedling is a
            minimally invasive cosmetic procedure that involves the use of a
            device containing fine needles to create controlled micro-injuries
            on the skin's surface. This stimulates the skin’s natural healing
            process, promoting the production of collagen and elastin, essential
            proteins for maintaining skin elasticity and firmness. The result? A
            smoother and brighter complexion with less fine lines, wrinkles, and
            acne scars. Suitable for all skin types, microneedling is our go-to
            for a fresh-faced glow.
          </Text>
          <Heading as="h2" size="lg" mb={4}>
            Frequency of Treatment
          </Heading>
          <Text as="p" mb={8}>
            For scarring, acne, melasma and sun damage, every 4-6 weeks; 4-6
            treatments are recommended for best results For age management,
            every 12 weeks; 4-6 treatments are recommended for best results
          </Text>
        </Box>
        <ServicesSpotlight title="Keep Learning 👇🏽" hide="Microneedling" />
        <ContactUs />
        <Footer />
      </Box>
    </PageLayout>
  );
}
