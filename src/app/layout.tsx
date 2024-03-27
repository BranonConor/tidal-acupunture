import type { Metadata } from "next";
import { Providers } from "./providers";
import { ColorModeScript, theme } from "@chakra-ui/react";
import Script from "next/script";
import { GA_TRACKING_ID } from "../gtag";

export const metadata: Metadata = {
  openGraph: {
    title: "TIDAL Acupunture",
    description: "A human-centered acupuncture clinic founded in San Diego, CA",
    url: "https//:www.tidalacupuncture.com",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icons/favicon-light.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicon-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
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
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
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
