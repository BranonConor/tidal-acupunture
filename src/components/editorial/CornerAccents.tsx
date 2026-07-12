"use client";

import { Box } from "@chakra-ui/react";

interface CornerAccentsProps {
  color: string;
  size?: string;
}

/**
 * Decorative L-shaped brackets framing the top-left and bottom-right of an
 * image. Used throughout the site to give photography a tasteful, gallery-like
 * frame without turning everything into a card.
 */
export const CornerAccents: React.FC<CornerAccentsProps> = ({
  color,
  size = "80px",
}) => (
  <>
    <Box
      position="absolute"
      top={-4}
      left={-4}
      width={size}
      height={size}
      borderTop="3px solid"
      borderLeft="3px solid"
      borderColor={color}
      borderTopLeftRadius={24}
      opacity={0.8}
      pointerEvents="none"
    />
    <Box
      position="absolute"
      bottom={-4}
      right={-4}
      width={size}
      height={size}
      borderBottom="3px solid"
      borderRight="3px solid"
      borderColor={color}
      borderBottomRightRadius={24}
      opacity={0.8}
      pointerEvents="none"
    />
  </>
);
