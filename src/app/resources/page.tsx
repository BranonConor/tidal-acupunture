"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { PageLayout } from "@/components/PageLayout";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

const resources = [
  {
    title: "How Acupuncture Works",
    description:
      "The science behind the needles — what to expect and how it heals.",
    href: "/services/acupuncture",
  },
  {
    title: "Explore Our Services",
    description:
      "From cosmetic acupuncture to fire cupping, find the right care for you.",
    href: "/services",
  },
  {
    title: "Meet Dr. Eusebio",
    description:
      "Get to know the doctor and philosophy behind TIDAL Acupuncture.",
    href: "/team/rachel-eusebio",
  },
];

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accent = useColorModeValue("brand.gold", "brand.mint");
  const cardBorder = useColorModeValue(
    "rgba(8, 40, 48, 0.14)",
    "rgba(255, 245, 226, 0.14)"
  );

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Patient Resources"
        description="More information to help our patients stay as informed and connected as possible."
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg={bg}
        color={textColor}
        px={[6, 8, 12]}
        py={[16, 20, 24]}
      >
        <Box maxWidth="1200px" width="100%">
          <ScrollReveal>
            <Eyebrow color={accent} accentColor={accent}>
              Start Here
            </Eyebrow>
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              lineHeight={1.15}
              maxWidth="720px"
            >
              Everything you need to feel at ease before your visit.
            </Heading>
            <Text
              as="p"
              color={subtleText}
              fontSize={["md", "lg"]}
              lineHeight={1.9}
              maxWidth="640px"
              mt={5}
            >
              New to acupuncture or just curious about what to expect? These
              guides are a great place to begin. Still have questions? We're
              always just a message away.
            </Text>
          </ScrollReveal>

          <Grid
            gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
            gridGap={[4, 6, 8]}
            mt={[10, 12, 16]}
          >
            {resources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.1}>
                <Flex
                  as={Link}
                  href={resource.href}
                  flexDirection="column"
                  height="100%"
                  p={[6, 8]}
                  borderRadius={16}
                  border="1px solid"
                  borderColor={cardBorder}
                  position="relative"
                  role="group"
                  transition="0.25s ease all"
                  _hover={{ transform: "translateY(-4px)" }}
                >
                  <Box
                    width="32px"
                    height="3px"
                    borderRadius="full"
                    bg={accent}
                    mb={5}
                    transition="0.3s ease all"
                    _groupHover={{ width: "48px" }}
                  />
                  <Heading as="h3" fontSize={["lg", "xl"]} mb={3}>
                    {resource.title}
                  </Heading>
                  <Text color={subtleText} lineHeight={1.7} mb={5}>
                    {resource.description}
                  </Text>
                  <Text
                    mt="auto"
                    fontWeight="600"
                    color={accent}
                    fontSize="sm"
                  >
                    Learn more →
                  </Text>
                </Flex>
              </ScrollReveal>
            ))}
          </Grid>
        </Box>
      </Flex>
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
