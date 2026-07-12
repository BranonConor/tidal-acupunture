"use client";

import {
  Box,
  Flex,
  Grid,
  Heading,
  useColorModeValue,
  Image,
  Text,
} from "@chakra-ui/react";
import { ScrollReveal } from "../ScrollReveal";

export const WhoWeAre = () => {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const accentBg = useColorModeValue("brand.wave", "brand.mauve");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const palmsImg = useColorModeValue(
    "/media/palms.png",
    "/media/palms-sunset.png"
  );
  const accentLine = useColorModeValue("brand.gold", "brand.mint");

  const values = [
    {
      title: "Passionate",
      description:
        "Nothing invigorates us more than helping our patients lead their healthiest, happiest lifestyles.",
    },
    {
      title: "Experts of our Craft",
      description:
        "We're doctorate-level acupuncturists, board-certified in all 50 states, with rich experience across all kinds of clinics, hospitals, and more.",
    },
    {
      title: "Human-centered",
      description:
        "We're people-persons — we value each and every patient at our practice and love meeting folks from all different walks of life.",
    },
    {
      title: "Holistic",
      description:
        "As stewards of both ancient Eastern medicine traditions and contemporary advancements, we embrace the interconnectedness of mind, body, and spirit.",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      width="100%"
      bg={bg}
      px={[6, 8, 12]}
      boxSizing="border-box"
      justifyContent="center"
      pt={[12, 14, 16]}
      pb={[12, 14, 16]}
    >
      <Box maxWidth="1200px" width="100%">
        {/* Editorial image + text layout */}
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "5fr 7fr"]}
          gridTemplateAreas={[
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"media title" "media desc"`,
          ]}
          gridTemplateRows={["auto", "auto", "auto", "auto 1fr"]}
          gridColumnGap={[6, 8, 12, 16]}
          gridRowGap={[6, 8, 10, 5]}
          alignItems="start"
        >
          <ScrollReveal gridArea="media" direction="left" mb={[4, 0]}>
            <Box position="relative">
              <Image
                src={palmsImg}
                width="100%"
                borderRadius={24}
                boxShadow="2xl"
              />
              {/* Accent decorative line */}
              <Box
                position="absolute"
                top={-4}
                left={-4}
                width="80px"
                height="80px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor={accentLine}
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
                borderColor={accentLine}
                borderBottomRightRadius={24}
                opacity={0.8}
              />
            </Box>
          </ScrollReveal>

          <ScrollReveal gridArea="title" direction="right" delay={0.15}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="xs"
              fontWeight="bold"
              color={accentLine}
              mb={4}
            >
              Who We Are
            </Text>
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              color={textColor}
              lineHeight={1.15}
              mb={[0, 0, 0, 6]}
            >
              We're more than a wellness destination.
            </Heading>
          </ScrollReveal>

          <ScrollReveal gridArea="desc" direction="right" delay={0.25}>
            <Text
              as="p"
              color={subtleText}
              fontSize={["md", "lg"]}
              lineHeight={1.8}
              mb={4}
            >
              TIDAL Acupuncture is a purpose-driven cornerstone within the
              community, committed to fostering a tidal wave of health and
              vitality. Our purpose extends beyond the treatment room, reaching
              into the heart of the community, where we aim to be a catalyst
              for positive change.
            </Text>
            <Text
              as="p"
              color={subtleText}
              fontSize={["md", "lg"]}
              lineHeight={1.8}
            >
              We're dedicated to providing accessible and transformative
              healthcare to address your immediate concerns AND cultivate a
              culture of
              <Text as="span" fontWeight="bold" color={textColor}>
                {" "}
                holistic living.{" "}
              </Text>
              Our purpose is to create a powerful shift towards a healthier,
              more vibrant community.
            </Text>
          </ScrollReveal>
        </Grid>

        {/* Values — editorial approach: alternating accent lines, not cards */}
        <Box mt={[16, 24, 32]}>
          <ScrollReveal>
            <Text
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="xs"
              fontWeight="bold"
              color={accentLine}
              mb={8}
            >
              Our Values
            </Text>
          </ScrollReveal>
          <Grid
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
            gridGap={0}
          >
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <Box
                  py={8}
                  px={[0, 4, 6]}
                  borderTop="1px solid"
                  borderColor={useColorModeValue(
                    "rgba(8, 40, 48, 0.12)",
                    "rgba(255, 245, 226, 0.12)"
                  )}
                  position="relative"
                  _hover={{
                    "& .value-accent": {
                      width: "40px",
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    className="value-accent"
                    position="absolute"
                    top={0}
                    left={[0, 4, 6]}
                    width="0px"
                    height="2px"
                    bg={accentLine}
                    transition="0.4s ease all"
                    opacity={0}
                  />
                  <Heading
                    as="h3"
                    fontSize={["lg", "xl"]}
                    color={textColor}
                    mb={3}
                  >
                    {value.title}
                  </Heading>
                  <Text
                    color={subtleText}
                    fontSize="md"
                    lineHeight={1.7}
                  >
                    {value.description}
                  </Text>
                </Box>
              </ScrollReveal>
            ))}
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};
