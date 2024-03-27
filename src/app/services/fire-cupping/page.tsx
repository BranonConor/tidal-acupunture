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
          title="Fire Cupping"
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
          <Heading as="h2">How Does Fire Cupping Work?</Heading>
          <Divider borderColor={textColor} mb={8} />
          <Text as="p" mb={8}>
            Come experience the healing art of fire cupping therapy. Fire
            cupping works by creating localized suction on the skin, which
            increases blood flow, loosens tight muscles, and breaks up scar
            tissue. This therapy is beneficial for everyone - from those who
            suffer from musculoskeletal pain, migraines or muscle tension to
            those looking to boost their athletic recovery and performance.
          </Text>
        </Box>
        <ServicesSpotlight title="Keep Learning 👇🏽" hide="Fire Cupping" />
        <Box py={16} px={[4, 4, 8]}></Box>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
