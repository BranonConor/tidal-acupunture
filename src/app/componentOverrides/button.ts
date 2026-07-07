import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  borderRadius: "24px",
  fontWeight: "bold",
  zIndex: 1,
  letterSpacing: "0.02em",
  transition: "0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) all",
  _dark: {
    color: "brand.royalMoss",
    background: "brand.mint",
    border: "2px solid",
    borderColor: "brand.mint",
    _hover: {
      opacity: 0.9,
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(174, 234, 187, 0.25)",
    },
  },
  _light: {
    color: "brand.royalMoss",
    background: "brand.gold",
    border: "2px solid",
    borderColor: "brand.gold",
    _hover: {
      opacity: 0.9,
      transform: "translateY(-2px)",
      boxShadow: "0 8px 24px rgba(240, 191, 64, 0.25)",
    },
  },
});

const secondary = defineStyle({
  borderRadius: "24px",
  fontWeight: "bold",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
  letterSpacing: "0.02em",
  transition: "0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) all",
  _dark: {
    color: "brand.mauve",
    background: "transparent",
    border: "2px solid",
    borderColor: "brand.mauve",
    _hover: {
      opacity: 0.9,
      transform: "translateY(-2px)",
      background: "rgba(200, 177, 164, 0.08)",
    },
  },
  _light: {
    color: "brand.royalMoss",
    background: "transparent",
    border: "2px solid",
    borderColor: "brand.royalMoss",
    _hover: {
      opacity: 0.9,
      transform: "translateY(-2px)",
      background: "rgba(8, 40, 48, 0.04)",
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, secondary },
});
