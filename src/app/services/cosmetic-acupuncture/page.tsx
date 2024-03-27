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

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const cardBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
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
          title="Cosmetic Acupuncture"
          description="How it works, what to expect, and more!"
        />
        <Box
          px={[4, 4, 8]}
          pt={16}
          pb={[4, 4, 8]}
          bg={cardBg}
          borderRadius={radius}
          mb={32}
          color={textColor}
        >
          <Heading as="h2">How Does Cosmetic Acupuncture Work?</Heading>
          <Divider borderColor={textColor} mb={8} />
          <Text as="p" mb={8}>
            Skincare with a zen twist, cosmetic acupuncture is a natural
            approach to improve skin health and appearance. The insertion of
            thin needles on the face increases blood flow, enhances collagen
            production, stimulates lymphatic drainage, and reduces inflammation
            and redness. Unlike harsh chemical peels and procedures, cosmetic
            acupuncture is a gentle and holistic approach that will reduce the
            appearance of fine lines and wrinkles and rejuvenate dull skin while
            protecting the skin barrier.
          </Text>
          <Heading mb={4} as="h2" size="lg">
            Frequency of Treatment
          </Heading>
          <Text as="p" mb={8}>
            While results are noticeable after just a few sessions, we recommend
            twice per week for 5-7 weeks for lasting results
          </Text>
        </Box>
        <ServicesSpotlight
          title="Keep Learning 👇🏽"
          hide="Cosmetic Acupuncture"
        />
        <Box py={16} px={[4, 4, 8]}></Box>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
