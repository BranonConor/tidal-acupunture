import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface HeroProps {
  title: string;
  description: string;
  ctaSection?: ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaSection,
}) => {
  const bgImage = useColorModeValue("/waves-blue.svg", "/waves-mauve.svg");
  const bg = useColorModeValue("brand.wave", "brand.mauve");
  const innerBg = useColorModeValue("brand.sand", "brand.royalMoss");

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      overflow="hidden"
      width="100%"
      bg={bg}
      px={[4, 8]}
      boxSizing="border-box"
    >
      <Box
        minHeight="632px"
        width="100%"
        maxWidth="1440px"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        pt={[28, 32, 36, 40]}
        pb={[4, 8]}
        px={[4, 8]}
        mb={20}
        position="relative"
        zIndex={1}
        boxSizing="border-box"
        bg={innerBg}
        borderBottomStartRadius={20}
        borderBottomEndRadius={20}
        boxShadow="2xl"
      >
        <Box position="relative" zIndex={1} maxWidth="100%">
          <Heading as="h1" size="4xl" pb={4}>
            {title}
          </Heading>
          <Text maxWidth="100%">{description}</Text>
          {ctaSection}
        </Box>
        <Box
          transform="rotate(-35deg) scale(1)"
          position="absolute"
          zIndex={0}
          bottom={[-16, -24, -16]}
          right={["-30%", "-30%", "-20%"]}
        >
          <Image src={bgImage} />
        </Box>
      </Box>
    </Flex>
  );
};
