"use client";

import {
  Flex,
  Heading,
  Grid,
  Text,
  Box,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import Link from "next/link";

const MotionBox = motion(Box);

export const OurTeam = () => {
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");

  return (
    <Flex
      px={[6, 8, 12]}
      bg="brand.royalMoss"
      width="100%"
      justifyContent="center"
      position="relative"
      zIndex={0}
      overflow="hidden"
    >
      {/* Subtle animated wave bg — tilted, fading downward */}
      <MotionBox
        position="absolute"
        zIndex={0}
        top={["-25%", "-30%", "-22%"]}
        left={["-70%", "-55%", "-32%"]}
        opacity={0.08}
        animate={{
          y: [0, 22, 0],
          rotate: [-33, -31, -33],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src={bgImage} minWidth={["1000px", "1300px", "1600px"]} />
      </MotionBox>

      {/* Top gradient fade (downward, opposite of hero) */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        height="220px"
        bgGradient="linear(to-b, brand.royalMoss 20%, rgba(8,40,48,0.7) 55%, transparent)"
        zIndex={0}
      />

      <Flex
        py={[16, 20, 24]}
        color="brand.sand"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        boxSizing="border-box"
        maxWidth="1200px"
        width="100%"
        position="relative"
        zIndex={1}
      >
        <Grid
          gridTemplateColumns={["1fr", "1fr", "1fr", "7fr 5fr"]}
          gridTemplateAreas={[
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"title" "media" "desc"`,
            `"title media" "desc media"`,
          ]}
          gridTemplateRows={["auto", "auto", "auto", "auto 1fr"]}
          gridColumnGap={[6, 8, 12, 16]}
          gridRowGap={[6, 8, 10, 5]}
          alignItems="start"
          width="100%"
        >
          {/* Title (eyebrow + heading) */}
          <ScrollReveal gridArea="title" direction="right">
            <Text
              textTransform="uppercase"
              letterSpacing="0.2em"
              fontSize="xs"
              fontWeight="bold"
              color={accentColor}
              mb={4}
            >
              Meet the Team
            </Text>
            <Heading
              as="h2"
              fontSize={["2xl", "3xl", "4xl"]}
              lineHeight={1.15}
              mb={[0, 0, 0, 6]}
            >
              The TIDAL Team
            </Heading>
          </ScrollReveal>

          {/* Static image with corner accents */}
          <ScrollReveal gridArea="media" direction="left" delay={0.15} mb={[4, 0]}>
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
              />
              {/* Corner accents */}
              <Box
                position="absolute"
                top={-4}
                left={-4}
                width="80px"
                height="80px"
                borderTop="3px solid"
                borderLeft="3px solid"
                borderColor={accentColor}
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
                borderColor={accentColor}
                borderBottomRightRadius={24}
                opacity={0.8}
              />
            </Box>
          </ScrollReveal>

          {/* Description + CTA */}
          <ScrollReveal gridArea="desc" direction="right" delay={0.25}>
            <Text
              mb={8}
              fontSize={["md", "lg"]}
              lineHeight={1.8}
              color="brand.wave"
              maxWidth="520px"
            >
              Nice to meet you! I'm Dr. Eusebio, founder of TIDAL Acupuncture. I
              offer a unique focus on women's health and sports medicine, but I
              am broadly trained to treat a wide variety of conditions.
            </Text>
            <Box>
              <Button as={Link} href="/team" variant="primary">
                Learn about us
              </Button>
            </Box>
          </ScrollReveal>
        </Grid>
      </Flex>
    </Flex>
  );
};
