"use client";

import { Navbar } from "@/components/Navbar";
import { Box, useColorModeValue, Image, Flex, Heading } from "@chakra-ui/react";

export default function Page() {
  const pageBg = useColorModeValue("brand.sand", "brand.royalMoss");
  const bg = useColorModeValue("brand.mauve", "brand.darkWave");
  const color = useColorModeValue("brand.royalMoss", "brand.sand");
  const wave = useColorModeValue("/waves-blue.svg", "/waves-moss.svg");

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
          boxShadow="lg"
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
            <Heading as="h1" size="3xl" textAlign="center">
              Dr. Rachel Eusebio
            </Heading>
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
      </Box>
    </Box>
  );
}
