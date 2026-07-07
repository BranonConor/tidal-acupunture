import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./componentOverrides/button";

const colors = {
  brand: {
    sand: "#FFF5E2",
    gold: "#F0BF40",
    wave: "#B6C6CB",
    royalMoss: "#082830",
    deepMoss: "#041820",
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

const styles = {
  global: {
    "html, body": {
      scrollBehavior: "smooth",
    },
    "@keyframes waveFloat": {
      "0%": { transform: "translateY(0px) rotate(-35deg)" },
      "50%": { transform: "translateY(-8px) rotate(-34deg)" },
      "100%": { transform: "translateY(0px) rotate(-35deg)" },
    },
    "@keyframes wavePulse": {
      "0%": { opacity: 0.15 },
      "50%": { opacity: 0.25 },
      "100%": { opacity: 0.15 },
    },
    "@keyframes subtleGlow": {
      "0%": { boxShadow: "0 0 20px rgba(240, 191, 64, 0.0)" },
      "50%": { boxShadow: "0 0 40px rgba(240, 191, 64, 0.08)" },
      "100%": { boxShadow: "0 0 20px rgba(240, 191, 64, 0.0)" },
    },
    "@keyframes gradientShift": {
      "0%": { backgroundPosition: "0% 50%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 50%" },
    },
  },
};

export const theme = extendTheme({ colors, config, components, styles });
