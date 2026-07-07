"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  flip = false,
  color,
}) => {
  const fillColor = useColorModeValue(
    color || "#FFF5E2",
    color || "#082830"
  );

  return (
    <Box
      width="100%"
      overflow="hidden"
      lineHeight={0}
      transform={flip ? "rotate(180deg)" : undefined}
      mt={flip ? undefined : "-1px"}
      mb={flip ? "-1px" : undefined}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z"
          fill={fillColor}
        />
      </svg>
    </Box>
  );
};
