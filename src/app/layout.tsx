import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorModeScript, theme } from "@chakra-ui/react";
import { Josefin_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "TIDAL Acupunture",
  description:
    "A boutique, human-centered acupuncture clinic founded in San Diego, CA",
};

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ padding: "none", margin: "none", overflowX: "hidden" }}
    >
      <body className={josefinSans.className}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
