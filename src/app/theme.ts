import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

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

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({ colors, config });
