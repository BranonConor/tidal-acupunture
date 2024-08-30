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
        title="Cosmetic Acupuncture"
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
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Cosmetic Acupuncture" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
