"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageLayout } from "@/components/PageLayout";
import { ContactUs } from "@/components/sections/ContactUs";
import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Flex,
  Grid,
  Heading,
} from "@chakra-ui/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { CornerAccents } from "@/components/editorial/CornerAccents";

export default function Page() {
  const color = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accent = useColorModeValue("brand.gold", "brand.mint");

  return (
    <PageLayout>
      <Navbar />
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        px={[6, 8, 12]}
        pt={[28, 32]}
        pb={[16, 24]}
        color={color}
      >
        <Flex
          maxWidth="1200px"
          width="100%"
          flexDirection="column"
          gap={[16, 20, 24]}
        >
          {/* Founder intro — portrait + editorial heading */}
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr", "5fr 7fr"]}
            gridTemplateAreas={[
              `"media" "title"`,
              `"media" "title"`,
              `"media" "title"`,
              `"media title"`,
            ]}
            gridGap={[8, 12, 16]}
            alignItems="center"
          >
            <ScrollReveal gridArea="media" direction="left" mb={[4, 0]}>
              <Box position="relative">
                <Image
                  src="/media/rachel.png"
                  width="100%"
                  borderRadius={24}
                  boxShadow="2xl"
                  draggable={false}
                />
                <CornerAccents color={accent} />
              </Box>
            </ScrollReveal>

            <ScrollReveal gridArea="title" direction="right" delay={0.15}>
              <Eyebrow color={accent} accentColor={accent}>
                Our Founder
              </Eyebrow>
              <Heading
                as="h1"
                fontSize={["3xl", "4xl", "5xl"]}
                lineHeight={1.1}
                mb={3}
              >
                Dr. Rachel Eusebio
              </Heading>
              <Text
                fontSize={["md", "lg"]}
                fontWeight="600"
                color={accent}
                mb={6}
              >
                DACM, L.Ac · Doctor of Acupuncture
              </Text>
              <Text
                fontSize={["md", "lg"]}
                lineHeight={1.9}
                color={subtleText}
              >
                Nice to meet you! I'm Dr. Eusebio, founder of TIDAL Acupuncture.
                I offer a unique focus on women's health and sports medicine,
                but I'm broadly trained to treat a wide variety of conditions —
                blending time-honored Eastern medicine with modern,
                evidence-based care.
              </Text>
            </ScrollReveal>
          </Grid>

          {/* Full biography — comfortable reading measure */}
          <Flex flexDirection="column" alignItems="center">
            <Box maxWidth="760px" width="100%">
              <ScrollReveal>
                <Eyebrow color={accent} accentColor={accent}>
                  Her Story
                </Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Flex flexDirection="column" gap={6}>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    lineHeight={1.9}
                    color={subtleText}
                  >
                    Dr. Eusebio DACM, L.Ac, is board certified by the National
                    Certification Commission for Acupuncture and Oriental
                    Medicine. She received her doctorate in acupuncture from
                    Pacific College of Health and Science in San Diego, CA. She
                    also holds a Bachelor of Science in Kinesiology from Westmont
                    College and integrates her knowledge of anatomy and
                    physiology with the art of traditional healing methods.
                    After experiencing her own battles with health, she
                    discovered Chinese medicine to not only be an effective
                    solution for many conditions, but also a way of life — one
                    that prioritizes rest and wellness.
                  </Text>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    lineHeight={1.9}
                    color={subtleText}
                  >
                    Dr. Eusebio is passionate about women's health and
                    empowering women in their unique journey toward optimal
                    health and vitality. Committed to staying at the forefront of
                    healthcare, Dr. Eusebio believes in evidence-based practices.
                    She meticulously incorporates the latest research into her
                    treatment protocols, ensuring that her patients receive the
                    highest quality of care.
                  </Text>
                  <Text
                    as="p"
                    fontSize={["md", "lg"]}
                    lineHeight={1.9}
                    color={subtleText}
                  >
                    Outside the clinic, Dr. Eusebio enjoys hiking, botany, and
                    photography. Her commitment lies in being not just a
                    healthcare practitioner but a companion on the path to
                    embracing balance and joy in every facet of life.
                  </Text>
                </Flex>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Image
                  src="/media/signature.svg"
                  alt="Dr. Rachel Eusebio signature"
                  height={["56px", "72px"]}
                  mt={10}
                  opacity={0.9}
                  draggable={false}
                />
              </ScrollReveal>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
