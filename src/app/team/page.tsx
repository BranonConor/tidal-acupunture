"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Grid,
  Text,
  Heading,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { PageLayout } from "@/components/PageLayout";
import { ScrollReveal } from "@/components/ScrollReveal";

const CornerAccents = ({ color }: { color: string }) => (
  <>
    <Box
      position="absolute"
      top={-4}
      left={-4}
      width="80px"
      height="80px"
      borderTop="3px solid"
      borderLeft="3px solid"
      borderColor={color}
      borderTopLeftRadius={24}
      opacity={0.8}
    />
    <Box
      position="absolute"
      bottom={-4}
      right={-4}
      width="80px"
      height="80px"
      borderBottom="3px solid"
      borderRight="3px solid"
      borderColor={color}
      borderBottomRightRadius={24}
      opacity={0.8}
    />
  </>
);

export default function Page() {
  const color = useColorModeValue("brand.royalMoss", "white");
  const teamBg = useColorModeValue("brand.wave", "brand.royalMoss");
  const accentLine = useColorModeValue("brand.gold", "brand.mint");
  const labelColor = useColorModeValue("brand.royalMoss", "brand.mint");
  const subtleText = useColorModeValue("brand.royalMoss", "brand.wave");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="About Us"
        description="We're more than just a wellness destination. We're passionate and skilled healers."
      />
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="center"
        overflowX="hidden"
        px={[6, 8, 12]}
        py={[16, 24]}
        bg={teamBg}
        color={color}
        width="100%"
      >
        <Flex
          maxWidth="1200px"
          width="100%"
          flexDirection="column"
          gap={[16, 24, 28]}
        >
          {/* A note to our patients — editorial, image + text */}
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr", "5fr 7fr"]}
            gridGap={[8, 12, 16]}
            alignItems="flex-start"
          >
            <ScrollReveal direction="left">
              <Box position="relative">
                <Image
                  src="/media/clinic/office-desk.png"
                  width="100%"
                  borderRadius={24}
                  boxShadow="2xl"
                  draggable={false}
                />
                <CornerAccents color={accentLine} />
              </Box>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <Flex flexDirection="column" pt={[6, 6, 0]}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                  fontSize="xs"
                  fontWeight="bold"
                  color={labelColor}
                  mb={4}
                >
                  Meet Our Team
                </Text>
                <Heading
                  as="h2"
                  fontSize={["2xl", "3xl", "4xl"]}
                  lineHeight={1.15}
                  mb={6}
                >
                  A note to our patients,
                </Heading>
                <Text
                  fontSize={["md", "lg"]}
                  lineHeight={1.9}
                  color={subtleText}
                  mb={6}
                >
                  We are passionate healers committed to making a difference in
                  healthcare. We blend the time-honored wisdom of Eastern
                  Medicine with modern research to provide our patients with
                  hands-on, exceptional care. We are dedicated to tailoring each
                  treatment to the unique needs of every individual who walks
                  through our doors. We understand that healing is not linear,
                  and we want to be your trusted partners through the ups and
                  downs of your wellness journey.
                </Text>
                <Text fontStyle="italic" fontSize={["md", "lg"]} fontWeight="600">
                  — The Tidal Team
                </Text>
              </Flex>
            </ScrollReveal>
          </Grid>

          {/* Founder feature — matches home OurTeam styling */}
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr", "7fr 5fr"]}
            gridGap={[8, 12, 16]}
            alignItems="flex-start"
          >
            <ScrollReveal direction="right">
              <Flex flexDirection="column">
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                  fontSize="xs"
                  fontWeight="bold"
                  color={labelColor}
                  mb={4}
                >
                  Our Founder
                </Text>
                <Heading
                  as="h2"
                  fontSize={["2xl", "3xl", "4xl"]}
                  lineHeight={1.15}
                  mb={2}
                >
                  Dr. Rachel Eusebio
                </Heading>
                <Text
                  fontSize={["sm", "md"]}
                  fontWeight="600"
                  color={labelColor}
                  mb={6}
                >
                  Doctor of Acupuncture (DACM)
                </Text>
                <Text
                  fontSize={["md", "lg"]}
                  lineHeight={1.8}
                  color={subtleText}
                  maxWidth="540px"
                  mb={8}
                >
                  Nice to meet you! I'm Dr. Eusebio, founder of TIDAL
                  Acupuncture. I offer a unique focus on women's health and
                  sports medicine, but I am broadly trained to treat a wide
                  variety of conditions.
                </Text>
                <Box>
                  <Button
                    as={Link}
                    href="/team/rachel-eusebio"
                    variant="primary"
                  >
                    Learn about Dr. Eusebio
                  </Button>
                </Box>
              </Flex>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <Box
                as={Link}
                href="/team/rachel-eusebio"
                display="block"
                position="relative"
                role="group"
              >
                <Image
                  src="/media/rachel.png"
                  width="100%"
                  borderRadius={24}
                  boxShadow="2xl"
                  transition="0.3s ease all"
                  _groupHover={{ transform: "translateY(-4px)" }}
                  draggable={false}
                />
                <CornerAccents color={accentLine} />
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Visit us in Santa Barbara — location band */}
          <Flex flexDirection="column">
            <ScrollReveal>
              <Flex flexDirection="column" alignItems="center" textAlign="center" mb={[8, 10, 12]}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="0.2em"
                  fontSize="xs"
                  fontWeight="bold"
                  color={labelColor}
                  mb={4}
                >
                  Our Space
                </Text>
                <Heading
                  as="h2"
                  fontSize={["2xl", "3xl", "4xl"]}
                  lineHeight={1.15}
                >
                  Visit us in Santa Barbara
                </Heading>
              </Flex>
            </ScrollReveal>
            <Grid
              gridTemplateColumns={["1fr", "1fr", "3fr 2fr"]}
              gridGap={[6, 8]}
            >
              <ScrollReveal direction="left" delay={0.1}>
                <Box position="relative">
                  <Image
                    src="/media/clinic/exterior.png"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    borderRadius={24}
                    boxShadow="2xl"
                    draggable={false}
                  />
                  <CornerAccents color={accentLine} />
                </Box>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <Image
                  src="/media/clinic/signage.png"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  borderRadius={24}
                  boxShadow="2xl"
                  draggable={false}
                />
              </ScrollReveal>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
