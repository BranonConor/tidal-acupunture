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
      mt={6}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxSizing="border-box"
      overflow="hidden"
      width="100%"
      bg={bg}
    >
      <Box
        minHeight="600px"
        maxWidth="1440px"
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        pt={[28, 32, 36]}
        pb={[4, 8]}
        px={[4, 8]}
        mb={20}
        position="relative"
        zIndex={1}
        boxSizing="border-box"
        bg={innerBg}
        borderRadius={20}
        boxShadow="2xl"
      >
        <Box width="100%">
          <Heading as="h1" size="4xl" pb={4} maxWidth="100%">
            {title}
          </Heading>
          <Text maxWidth="100%">{description}</Text>
          {ctaSection && ctaSection}
        </Box>
        <Box
          transform="rotate(-35deg) scale(1)"
          position="absolute"
          zIndex={0}
          bottom={[-16, -24, -16]}
          right={["-30%", "-30%", "-20%"]}
        >
          <Image src={bgImage} minWidth="100%" />
        </Box>
      </Box>
    </Flex>
  );
};
