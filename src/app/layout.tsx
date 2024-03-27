import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorModeScript, theme } from "@chakra-ui/react";
import Script from "next/script";
import * as gtag from "../gtag.js";

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
      suppressHydrationWarning
      lang="en"
      style={{ padding: "none", margin: "none", overflowX: "hidden" }}
    >
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag.GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                    `,
          }}
        />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
