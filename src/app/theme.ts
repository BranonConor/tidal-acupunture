import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./componentOverrides/button";

const colors = {
  brand: {
    sand: "#FFF5E2",
    gold: "#F0BF40",
    wave: "#B6C6CB",
    royalMoss: "#082830",
    rustGold: "#9F7C00",
    mint: "#AEEABB",
    lightMauve: "#DEC6BC",
    mauve: "#C8B1A4",
    darkWave: "#759AA6",
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const components = {
  Button: buttonTheme,
};

export const theme = extendTheme({ colors, config, components });
