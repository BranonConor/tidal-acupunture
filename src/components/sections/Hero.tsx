"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface HeroProps {
  title: string;
  description: string;
  ctaSection?: ReactNode;
}

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaSection,
}) => {
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const bgImage2 = useColorModeValue("/wave-large-wave.svg", "/wave-large-mauve.svg");
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const accentBg = useColorModeValue(
    "linear-gradient(135deg, rgba(182, 198, 203, 0.3) 0%, rgba(255, 245, 226, 0.6) 100%)",
    "linear-gradient(135deg, rgba(8, 40, 48, 0.8) 0%, rgba(4, 24, 32, 0.95) 100%)"
  );
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtitleColor = useColorModeValue("brand.darkWave", "brand.wave");
  const frontWaveOpacity = useColorModeValue(0.2, 0.08);
  const frontWaveOpacityMobile = useColorModeValue(0.1, 0.04);
  const dotsImg = useColorModeValue("/dots-gold.svg", "/dots-blue.svg");

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      overflow="hidden"
      width="100%"
      minHeight="100vh"
      bg={bg}
      boxSizing="border-box"
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        bg={accentBg}
        pointerEvents="none"
        zIndex={0}
      />

      {/* Dot graphic — mobile only, tucked under the navbar */}
      <MotionBox
        display={["block", "block", "none"]}
        position="absolute"
        top="88px"
        left="50%"
        zIndex={0}
        pointerEvents="none"
        opacity={0.5}
        animate={{ y: [0, 8, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ translateX: "-50%" }}
      >
        <Image src={dotsImg} width="260px" />
      </MotionBox>

      {/* Animated wave - back layer */}
      <MotionBox
        display={["none", "block"]}
        position="absolute"
        zIndex={0}
        pointerEvents="none"
        bottom={["8%", "-30%", "-20%"]}
        right={["-40%", "-45%", "-25%"]}
        opacity={0.12}
        animate={{
          y: [0, -28, 0],
          rotate: [-35, -33, -35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src={bgImage2} minWidth={["1000px", "1300px", "1600px"]} />
      </MotionBox>

      {/* Animated wave - front layer */}
      <MotionBox
        position="absolute"
        zIndex={0}
        pointerEvents="none"
        bottom={["20%", "-20%", "-10%"]}
        left={["-55%", "-65%", "-35%"]}
        opacity={[frontWaveOpacityMobile, frontWaveOpacity]}
        animate={{
          y: [0, 22, 0],
          rotate: [25, 27, 25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Image src={bgImage} minWidth={["1000px", "1300px", "1600px"]} />
      </MotionBox>

      {/* Faded sun/moon orbs scattered among the waves */}

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        maxWidth="1200px"
        width="100%"
        px={[6, 8, 12]}
        pt={[32, 36, 40]}
        pb={[20, 24, 32]}
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        minHeight="100vh"
      >
        <MotionHeading
          as="h1"
          fontSize={["3xl", "5xl", "6xl", "7xl"]}
          lineHeight={1.05}
          letterSpacing="-0.02em"
          color={textColor}
          maxWidth={["100%", "100%", "75%"]}
          pb={6}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {title}
        </MotionHeading>

        <MotionText
          fontSize={["md", "lg", "xl"]}
          color={subtitleColor}
          maxWidth={["100%", "100%", "550px"]}
          lineHeight={1.7}
          pb={8}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {description}
        </MotionText>

        <MotionFlex
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {ctaSection}
        </MotionFlex>
      </Flex>

      {/* Bottom gradient fade */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={["120px", "220px", "280px"]}
        pointerEvents="none"
        bgGradient={useColorModeValue(
          "linear(to-t, brand.sand 20%, rgba(255,245,226,0.7) 55%, transparent)",
          "linear(to-t, brand.royalMoss 20%, rgba(8,40,48,0.7) 55%, transparent)"
        )}
        zIndex={1}
      />
    </Flex>
  );
};
