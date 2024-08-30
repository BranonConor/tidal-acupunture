"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  Divider,
  useColorModeValue,
  Heading,
  Text,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const cardBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.royalMoss");
  const effectCardBg = useColorModeValue("brand.darkWave", "brand.royalMoss");

  const effects = [
    {
      title: "🫶🏿 Pain Relief",
      description: "Alters pain perception and reduces pain intensity",
    },
    {
      title: "🔥 Inflammation Reduction",
      description: "Modulates inflammatory responses",
    },
    {
      title: "🧠 Neurotransmitter Regulation",
      description:
        "Influences the release of neurotransmitters for improved nerve signaling",
    },
    {
      title: "💊 Endorphin Release",
      description:
        "Stimulates the production of endorphins, the body's natural painkillers",
    },
    {
      title: "🛡️ Immune System Modulation",
      description: "Enhances immune function and regulates immune responses",
    },
    {
      title: "🩸 Blood Flow Enhacement",
      description: "Improves blood circulation in treated areas",
    },
    {
      title: "🧘🏻‍♀️ Stress and Anxiety Reduction",
      description: "Induces relaxation and lowers stress and anxiety levels",
    },
    {
      title: "⚖️ Hormonal balance",
      description: "Regulates hormonal levels for improved overall balance",
    },
    {
      title: "💪🏽 Muscle Tension Reduction",
      description: "Relaxes muscles and reduces tension",
    },
    {
      title: "😴 Improved Sleep Quality",
      description: "Positively influences sleep patterns and quality",
    },
    {
      title: "⚙️ Cognitive Function Improvement",
      description: "Enhances cognitive functions and mental clarity",
    },
  ];

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Acupuncture"
        description="How it works, what to expect, and more!"
      />
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="center"
        px={[4, 8]}
        py={[16, 24]}
        bg={cardBg}
        color={textColor}
        width="100%"
      >
        <Box maxWidth="1440px" width="100%">
          <Heading as="h2">How Does Acupuncture Work?</Heading>
          <Divider borderColor={textColor} mb={8} />
          <Text as="p" mb={8}>
            Acupuncture aims to restore balance in the body by stimulating
            points along meridians which coincide with areas rich in blood
            vessels, nerves, and tissue. Stimulation at these points sends
            signals that reduce inflammation, inhibit pain pathways, and
            stimulate a variety of neurotransmitters providing immediate and
            long-term relief. This leads to benefits such as pain relief, muscle
            relaxation, anti-inflammatory effects, and immune regulation among
            many others. Acupuncture meridians have unique properties relating
            to electricity, heat, sound, light, and magnetism which are absent
            in other body areas, supporting the existence of these meridians.
          </Text>
          <Heading as="h3" size="lg" mb={4}>
            For the science nerds 🤓
          </Heading>
          <Text as="p" mb={8}>
            During acupuncture, blood vessels, mast cells, and nerve fibers are
            stimulated, sending signals to the body to reduce inflammation and
            inhibit certain pathways associated with pain. This leads to
            immediate and long-term pain relief by affecting spinal microglia
            and astrocytes. Acupuncture also influences the brain's pain
            modulation system, involving various neurotransmitters like
            endogenous opioids, serotonin, and glutamate, among others. Studies
            have indicated that acupuncture has various actions, such as
            analgesic, muscle relaxing, anti-inflammatory and antidepressant
            actions, with biological mechanisms that influence the nervous
            system, intestinal flora, immune regulation, oxidative stress, and
            neuroinflammation.
          </Text>
          <Heading as="h3" size="md" mb={8}>
            Put simply, Acupuncture has the following effects:
          </Heading>
          <Grid
            gridGap={4}
            gridTemplateColumns={[
              "1fr",
              "1fr 1fr",
              "1fr 1fr 1fr",
              "1fr 1fr 1fr 1fr",
            ]}
          >
            {effects.map((effect) => (
              <Box
                bg={effectCardBg}
                color="brand.sand"
                padding={4}
                borderRadius={16}
                minHeight="200px"
                _hover={{
                  transform: "translateY(-2px)",
                }}
                transition="0.2s ease all"
              >
                <Heading my={2} as="h4" size="md">
                  {effect.title}
                </Heading>
                <Divider borderColor="brand.sand" mb={2} width="50%" />
                <Text>{effect.description}</Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Acupuncture" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
