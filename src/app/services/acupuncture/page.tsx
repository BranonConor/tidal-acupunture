"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Grid,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { FeatureRow } from "@/components/editorial/FeatureRow";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Page() {
  const cardBg = useColorModeValue("brand.wave", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const accent = useColorModeValue("brand.gold", "brand.mint");
  const effectCardBg = useColorModeValue("brand.darkWave", "brand.deepMoss");

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
        px={[6, 8, 12]}
        py={[16, 24]}
        bg={cardBg}
        color={textColor}
        width="100%"
      >
        <Flex
          maxWidth="1200px"
          width="100%"
          flexDirection="column"
          gap={[16, 24, 28]}
        >
          <FeatureRow
            eyebrow="How It Works"
            title="How Does Acupuncture Work? 💭"
            imageSrc="/media/clinic/acu-1.png"
            imageAlt="Acupuncture treatment at TIDAL"
            imageSide="left"
            body={[
              "Acupuncture aims to restore balance in the body by stimulating points along meridians which coincide with areas rich in blood vessels, nerves, and tissue. Stimulation at these points sends signals that reduce inflammation, inhibit pain pathways, and stimulate a variety of neurotransmitters providing immediate and long-term relief.",
              "This leads to benefits such as pain relief, muscle relaxation, anti-inflammatory effects, and immune regulation among many others. Acupuncture meridians have unique properties relating to electricity, heat, sound, light, and magnetism which are absent in other body areas, supporting the existence of these meridians.",
            ]}
          />

          {/* The science — full-measure editorial block */}
          <Box>
            <ScrollReveal>
              <Eyebrow color={textColor} accentColor={accent}>
                The Science
              </Eyebrow>
              <Heading as="h2" fontSize={["2xl", "3xl", "4xl"]} mb={6}>
                For the science nerds 🤓
              </Heading>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                lineHeight={1.9}
                maxWidth="820px"
              >
                During acupuncture, blood vessels, mast cells, and nerve fibers
                are stimulated, sending signals to the body to reduce
                inflammation and inhibit certain pathways associated with pain.
                This leads to immediate and long-term pain relief by affecting
                spinal microglia and astrocytes. Acupuncture also influences the
                brain's pain modulation system, involving various
                neurotransmitters like endogenous opioids, serotonin, and
                glutamate, among others. Studies have indicated that acupuncture
                has various actions, such as analgesic, muscle relaxing,
                anti-inflammatory and antidepressant actions, with biological
                mechanisms that influence the nervous system, intestinal flora,
                immune regulation, oxidative stress, and neuroinflammation.
              </Text>
            </ScrollReveal>

            <ScrollReveal>
              <Heading as="h3" size="md" mt={[10, 12]} mb={6}>
                Put simply, acupuncture has the following effects:
              </Heading>
            </ScrollReveal>
            <Grid
              gridGap={4}
              gridTemplateColumns={[
                "1fr",
                "1fr 1fr",
                "1fr 1fr 1fr",
                "1fr 1fr 1fr 1fr",
              ]}
            >
              {effects.map((effect, i) => (
                <ScrollReveal key={effect.title} delay={(i % 4) * 0.08}>
                  <Box
                    bg={effectCardBg}
                    color="brand.sand"
                    padding={6}
                    borderRadius={24}
                    height="100%"
                    minHeight={["auto", "220px"]}
                    position="relative"
                    overflow="hidden"
                    transition="0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) all"
                    border="1px solid"
                    borderColor="rgba(255, 245, 226, 0.08)"
                    _hover={{
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                      borderColor: "rgba(255, 245, 226, 0.15)",
                    }}
                  >
                    <Text fontSize="2xl" mb={3}>
                      {effect.title.split(" ")[0]}
                    </Text>
                    <Heading mb={3} as="h4" fontSize="md" fontWeight="600">
                      {effect.title.split(" ").slice(1).join(" ")}
                    </Heading>
                    <Box
                      width="24px"
                      height="2px"
                      borderRadius="full"
                      bg={accent}
                      mb={3}
                    />
                    <Text lineHeight={1.7} fontSize="sm" opacity={0.85}>
                      {effect.description}
                    </Text>
                  </Box>
                </ScrollReveal>
              ))}
            </Grid>
          </Box>

          <FeatureRow
            id="acupuncture-process"
            eyebrow="Your Visit"
            title="The Acupuncture experience at TIDAL ✨"
            imageSrc="/media/clinic/acu-2.png"
            imageAlt="Inside the TIDAL treatment room"
            imageSide="right"
            body={[
              "Each acupuncture regimen at TIDAL begins with our New Patient Consult + Treatment visit, where we gather crucial medical history and learn more about who you are as a person + provide an initial acupuncture treatment.",
              "From there, we'll recommend any number of follow-up sessions ranging from 30-60 minutes depending on your case. We may also recommend other services as well to catalyze your healing journey further. And don't worry - we'll make sure you're as informed as possible on our recommendations so you know what may/may not be optimal for your case and condition.",
              "We are also working on packages, memberships, and more exciting ways to provide you with ample options for your plan of care - more on that soon! Until then contact us any time if you have questions. We can't wait to meet you!",
            ]}
          />
        </Flex>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Acupuncture" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
