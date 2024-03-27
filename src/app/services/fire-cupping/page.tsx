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
          <Heading mb={4} as="h2">
            How Does Fire Cupping Work?
          </Heading>
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
