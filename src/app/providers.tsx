"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme } from "./theme";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});
const fonts = {
  heading: josefinSans.style.fontFamily,
  body: josefinSans.style.fontFamily,
  p: josefinSans.style.fontFamily,
  span: josefinSans.style.fontFamily,
  li: josefinSans.style.fontFamily,
};
const themeWithFonts = extendTheme({ ...theme, fonts });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeWithFonts}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
