"use client";

import { Box, Text, TextProps } from "@chakra-ui/react";

interface EyebrowProps extends TextProps {
  children: React.ReactNode;
  /** Color of the short accent bar rendered beneath the label. */
  accentColor?: string;
}

/**
 * Small uppercase editorial label ("kicker"), optionally followed by a short
 * accent bar. Establishes the refined section rhythm used across the site.
 */
export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  accentColor,
  ...rest
}) => (
  <Box>
    <Text
      textTransform="uppercase"
      letterSpacing="0.2em"
      fontSize="xs"
      fontWeight="bold"
      mb={accentColor ? 3 : 4}
      {...rest}
    >
      {children}
    </Text>
    {accentColor && (
      <Box
        width="48px"
        height="3px"
        borderRadius="full"
        bg={accentColor}
        mb={5}
      />
    )}
  </Box>
);
