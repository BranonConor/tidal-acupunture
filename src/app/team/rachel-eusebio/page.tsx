"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ContactUs } from "@/components/sections/ContactUs";
import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function Page() {
  const pageBg = useColorModeValue("brand.sand", "brand.royalMoss");
  const bg = useColorModeValue("brand.mauve", "brand.darkWave");
  const color = useColorModeValue("brand.royalMoss", "brand.sand");
  const wave = useColorModeValue("/waves-blue.svg", "/waves-moss.svg");
  const radius = useColorModeValue(16, 16);

  return (
    <Box
      as="main"
      bg={pageBg}
      minHeight="100vh"
      maxWidth="100%"
      width="100%"
      padding="0"
      display="flex"
      justifyContent="center"
      boxSizing="border-box"
    >
      <Navbar />
      <Box maxWidth="1440px" width="100%" position="relative" pt={24} px={[4]}>
        <Flex
          flexDirection="column"
          alignItems="center"
          position="relative"
          mb={16}
          borderRadius={16}
          overflow="hidden"
          bg={bg}
          padding={[4, 8]}
        >
          <Image
            src="/media/rachel-pose.png"
            borderRadius="100%"
            boxShadow="lg"
            position="relative"
            zIndex="1"
            mb={[4, 8, 12]}
          />
          <Flex
            position="relative"
            zIndex="1"
            py={[8, 12]}
            px={[0, 4, 8]}
            borderRadius={16}
            flexDirection="column"
            alignItems="center"
            color={color}
            maxWidth="800px"
          >
            <Heading mb={8} as="h1" size="3xl" textAlign="center">
              Dr. Rachel Eusebio
            </Heading>
            <Text as="p" mb={4}>
              Dr. Eusebio DACM, L.Ac, is board certified by the National
              Certification Commission for Acupuncture and Oriental Medicine.
              She received her doctorate in acupuncture from Pacific College of
              Health and Science in San Diego, CA. She also holds a Bachelor of
              Science in Kinesiology from Westmont College and integrates her
              knowledge of anatomy and physiology with the art of traditional
              healing methods. After experiencing her own battles with health,
              she discovered Chinese medicine to not only be an effective
              solution for many conditions, but also a way of life - one that
              prioritizes rest and wellness.
            </Text>
            <Text as="p" mb={4}>
              Dr. Eusebio is passionate about women's health and empowering
              women in their unique journey toward optimal health and vitality.
              Committed to staying at the forefront of healthcare, Dr. Eusebio
              believes in evidence-based practices. She meticulously
              incorporates the latest research into her treatment protocols,
              ensuring that her patients receive the highest quality of care.
            </Text>
            <Text as="p">
              Outside the clinic, Dr. Eusebio enjoys hiking, botany, and
              photography. Her commitment lies in being not just a healthcare
              practitioner but a companion on the path to embracing balance and
              joy in every facet of life.
            </Text>
          </Flex>
          <Image
            src={"/waves-blue.svg"}
            position="absolute"
            top={[8]}
            minWidth="170%"
            zIndex="1"
            opacity="0.30"
            transform="rotate(30deg)"
          />
          <Image
            src={wave}
            position="absolute"
            top={[8]}
            minWidth="170%"
            zIndex="0"
            transform="rotate(30deg)"
          />
        </Flex>
        <ContactUs radius={radius} />
        <Footer />
      </Box>
    </Box>
  );
}
