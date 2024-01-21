import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  borderRadius: "20px",
  fontWeight: "bold",
  zIndex: 1,
  _dark: {
    color: "brand.royalMoss",
    background: "brand.mint",
    border: "2px solid",
    borderColor: "brand.mint",
    _hover: {
      opacity: 0.85,
      transform: "translateY(-1px)",
    },
  },
  _light: {
    color: "brand.royalMoss",
    background: "brand.gold",
    border: "2px solid",
    borderColor: "brand.gold",
    _hover: {
      opacity: 0.85,
      transform: "translateY(-1px)",
    },
  },
});

const secondary = defineStyle({
  borderRadius: "20px",
  fontWeight: "bold",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  _dark: {
    color: "brand.mauve",
    background: "brand.royalMoss",
    border: "2px solid",
    borderColor: "brand.mauve",
    _hover: {
      opacity: 0.85,
      transform: "translateY(-1px)",
    },
  },
  _light: {
    color: "brand.royalMoss",
    background: "brand.sand",
    border: "2px solid",
    borderColor: "brand.royalMoss",
    _hover: {
      opacity: 0.85,
      transform: "translateY(-1px)",
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});
