"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <Box
      as={motion.button}
      aria-label="color mode toggle"
      onClick={toggleColorMode}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
        rotate: 10,
      }}
      whileTap={{
        scale: 1.3,
        transition: { duration: 0.1 },
        rotate: -10,
      }}
    >
      {icon}
    </Box>
  );
};
