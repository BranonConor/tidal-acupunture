import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorModeScript, theme } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "TIDAL Acupunture",
  description:
    "A boutique, human-centered acupuncture clinic founded in San Diego, CA",
};

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
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
