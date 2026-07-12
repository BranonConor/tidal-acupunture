"use client";

import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Testimonial } from "./testimonialData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  const cardBg = useColorModeValue("white", "brand.deepMoss");
  const borderColor = useColorModeValue(
    "rgba(8, 40, 48, 0.1)",
    "rgba(255, 245, 226, 0.1)"
  );
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accentColor = useColorModeValue("brand.gold", "brand.mint");
  const quoteMarkColor = useColorModeValue(
    "rgba(240, 191, 64, 0.15)",
    "rgba(174, 234, 187, 0.1)"
  );

  return (
    <Flex
      flexDirection="column"
      bg={cardBg}
      borderRadius={24}
      border="1px solid"
      borderColor={borderColor}
      p={[6, 7, 8]}
      position="relative"
      overflow="hidden"
      transition="0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) all"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.08)",
        borderColor: accentColor,
      }}
      height="100%"
    >
      {/* Decorative quote mark */}
      <Text
        position="absolute"
        top={-2}
        left={4}
        fontSize="8xl"
        fontWeight="bold"
        color={quoteMarkColor}
        lineHeight={1}
        pointerEvents="none"
        userSelect="none"
      >
        &ldquo;
      </Text>

      {/* Accent bar */}
      <Box
        width="32px"
        height="3px"
        borderRadius="full"
        bg={accentColor}
        mb={5}
      />

      {/* Quote */}
      <Text
        color={textColor}
        fontSize={["sm", "md"]}
        lineHeight={1.8}
        mb={6}
        flex={1}
        position="relative"
        zIndex={1}
      >
        {testimonial.quote}
      </Text>

      {/* Attribution */}
      <Flex
        flexDirection="column"
        borderTop="1px solid"
        borderColor={borderColor}
        pt={4}
        mt="auto"
      >
        <Heading as="h4" fontSize="sm" fontWeight="700" color={textColor}>
          {testimonial.name}
        </Heading>
        <Text fontSize="xs" color={subtleText} mt={1}>
          {testimonial.condition}
        </Text>
        {/* Star rating */}
        <Flex mt={2} gap={0.5}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Text key={i} fontSize="xs" color={accentColor}>
              ★
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
