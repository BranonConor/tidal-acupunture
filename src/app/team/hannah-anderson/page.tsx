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
            src="/media/hannah-pose.png"
            borderRadius="100%"
            boxShadow="lg"
            position="relative"
            zIndex="1"
            mb={12}
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
              Dr. Hannah Anderson
            </Heading>
            <Text as="p" mb={4}>
              Dr. Anderson DACM, L.Ac., Diplo. OM is a licensed acupuncturist in
              California and an NCCAOM board-certified diplomat of Oriental
              Medicine. She earned her doctorate in acupuncture and Chinese
              medicine and a Master of Science in traditional Oriental Medicine
              from the Pacific College of Health and Science and has a Bachelor
              of Science in Human Physiology from Gonzaga University.
            </Text>
            <Text as="p" mb={4}>
              Dr. Anderson is deeply committed to pain relief and management.
              Central to her patient-centric approach is the premium she places
              on attentive listening, ensuring that individual concerns are
              addressed with precision and empathy. Additionally, she maintains
              a dedication to staying updated on the latest research in the
              field. Her holistic approach ensures individual needs are met,
              combining ancient wisdom with modern expertise for optimal patient
              care, no matter the condition.
            </Text>
            <Text as="p">
              Originating from Bend, Oregon, Dr. Anderson's love for running and
              outdoor pursuits also fuels a passion for applying acupuncture in
              the realms of orthopedic and sports injuries, as well as enhancing
              athletic performance.
            </Text>
          </Flex>
          <Image
            src={"/waves-blue.svg"}
            position="absolute"
            top={[8]}
            minWidth="170%"
            zIndex="1"
            opacity="0.15"
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
