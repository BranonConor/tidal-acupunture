"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    sand: "#FFF5E2",
    gold: "#F0BF40",
    wave: "#B6C6CB",
    royalMoss: "#082830",
    rustGold: "#9F7C00",
    mint: "#AEEABB",
    lightMauve: "#DEC6BC",
  },
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
