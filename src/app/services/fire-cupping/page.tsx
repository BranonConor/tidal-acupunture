"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Divider,
  Flex,
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
        title="Fire Cupping"
        description="How it works, what to expect, and more!"
      />
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="center"
        px={[4, 8]}
        py={[12, 14]}
        bg={cardBg}
        color={textColor}
        width="100%"
      >
        <Box maxWidth="1440px" width="100%">
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
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Fire Cupping" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
