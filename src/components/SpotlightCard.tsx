import { Box, Image, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export interface SpotlightCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title,
  description,
  image,
  href,
}) => {
  const cardText = useColorModeValue("brand.sand", "brand.sand");
  const cardBg = useColorModeValue("brand.darkWave", "brand.royalMoss");
  const radius = useColorModeValue(16, 16);

  return (
    <Box
      as={Link}
      href={href}
      bg={cardBg}
      borderRadius={radius}
      px={4}
      py={8}
      color={cardText}
      position="relative"
      overflow="hidden"
      minHeight="250px"
      _hover={{
        "#spotlight-card-overlay": {
          opacity: 0.05,
        },
        cursor: "pointer",
        transition: "0.2s ease all",

        img: {
          top: "-8px",
        },
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

      <Box position="relative" zIndex={2}>
        <Heading as="h3" size="xl" mb={4}>
          {title}
        </Heading>
        <Text as="p">{description}</Text>
      </Box>
    </Box>
  );
};
