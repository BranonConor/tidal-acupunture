import { Box, Image, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export interface SpotlightCardProps {
  title: string;
  description: string;
  image: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title,
  description,
  image,
}) => {
  const cardBg = useColorModeValue("brand.sand", "brand.mint");
  const cardText = useColorModeValue("brand.sand", "brand.sand");
  const radius = useColorModeValue(16, 16);
  const overlay = useColorModeValue(
    "/media/overlay-dark.png",
    "/media/overlay-dark.png"
  );

  return (
    <Box
      boxShadow="md"
      borderRadius={radius}
      px={4}
      py={8}
      bg={cardBg}
      color={cardText}
      position="relative"
      overflow="hidden"
      minHeight="250px"
      _hover={{
        "#spotlight-card-overlay": {
          opacity: 0.5,
        },
        cursor: "pointer",
      }}
    >
      <Image
        src={image}
        position="absolute"
        top="0"
        left={["", "0"]}
        right={["0", ""]}
        zIndex={0}
        minWidth={["400px", "100%", "100%", "100%", "100%", "100%"]}
        minHeight={["auto", "auto", "auto", "auto", "auto", "auto"]}
        transition="0.2s ease all"
        transform={[
          "scale(1.5) translateY(20px)",
          "scale(1.25) translateY(20px)",
          "scale(2.15) translateX(-50px)",
          "scale(1.5) translateX(-50px)",
          "scale(1)",
          "scale(1)",
        ]}
      />
      <Image
        src={overlay}
        position="absolute"
        top="0"
        left="0"
        zIndex={1}
        width="100%"
        height="100%"
        transition="0.2s ease all"
        id="spotlight-card-overlay"
      />
      <Box position="relative" zIndex={2}>
        <Heading as="h3" size="xl" mb={4}>
          {title}
        </Heading>
        <Text as="p">{description}</Text>
      </Box>
    </Box>
  );
};
