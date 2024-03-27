"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue, Heading, Text, Grid } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const cardBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const effectCardBg = useColorModeValue("brand.darkWave", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);

  const effects = [
    {
      title: "Pain Relief",
      description: "🫶🏿 Alters pain perception and reduces pain intensity",
    },
    {
      title: "Inflammation Reduction",
      description: "🔥 Modulates inflammatory responses",
    },
    {
      title: "Neurotransmitter Regulation",
      description:
        "🧠 Influences the release of neurotransmitters for improved nerve signaling",
    },
    {
      title: "Endorphin Release",
      description:
        "💊 Stimulates the production of endorphins, the body's natural painkillers",
    },
    {
      title: "Immune System Modulation",
      description: "🛡️ Enhances immune function and regulates immune responses",
    },
    {
      title: "Blood Flow Enhacement",
      description: "🩸 Improves blood circulation in treated areas",
    },
    {
      title: "Stress and Anxiety Reduction",
      description: "🧘🏻‍♀️ Induces relaxation and lowers stress and anxiety levels",
    },
    {
      title: "Hormonal balance",
      description: "⚖️ Regulates hormonal levels for improved overall balance",
    },
    {
      title: "Muscle Tension Reduction",
      description: "💪🏽 Relaxes muscles and reduces tension",
    },
    {
      title: "Improved Sleep Quality",
      description: "😴 Positively influences sleep patterns and quality",
    },
    {
      title: "Cognitive Function Improvement",
      description: "⚙️ Enhances cognitive functions and mental clarity",
    },
  ];

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
          <Heading mb={4} as="h2">
            How Does Cosmetic Acupuncture Work?
          </Heading>
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
          <Heading mb={4} as="h2">
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
