"use client";

import { Navbar } from "@/components/Navbar";
import {
  useColorModeValue,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { PageLayout } from "@/components/PageLayout";
import { FeatureRow } from "@/components/editorial/FeatureRow";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Page() {
  const cardBg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const accent = useColorModeValue("brand.gold", "brand.mint");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Microneedling"
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
            title="How Does Microneedling Work? 💭"
            imageSrc="/media/clinic/guasha.png"
            imageAlt="Microneedling and gua sha at TIDAL"
            imageSide="right"
            body={[
              "Ever wondered about the magic of microneedling? Microneedling is a minimally invasive cosmetic procedure that involves the use of a device containing fine needles to create controlled micro-injuries on the skin's surface. This stimulates the skin's natural healing process, promoting the production of collagen and elastin, essential proteins for maintaining skin elasticity and firmness.",
              "The result? A smoother and brighter complexion with less fine lines, wrinkles, and acne scars. Suitable for all skin types, microneedling is our go-to for a fresh-faced glow.",
            ]}
          />

          <Box>
            <ScrollReveal>
              <Eyebrow color={textColor} accentColor={accent}>
                What To Expect
              </Eyebrow>
              <Heading as="h2" fontSize={["2xl", "3xl", "4xl"]} mb={6}>
                Frequency of Treatment ⏳
              </Heading>
              <Text
                as="p"
                fontSize={["md", "lg"]}
                lineHeight={1.9}
                maxWidth="820px"
              >
                For scarring, acne, melasma and sun damage, every 4-6 weeks; 4-6
                treatments are recommended for best results. For age management,
                every 12 weeks; 4-6 treatments are recommended for best results.
              </Text>
            </ScrollReveal>
          </Box>
        </Flex>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Microneedling" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
