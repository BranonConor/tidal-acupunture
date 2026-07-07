"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { PageLayout } from "@/components/PageLayout";
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

const LAST_UPDATED = "July 7, 2026";

export default function Page() {
  const bg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accent = useColorModeValue("brand.gold", "brand.mint");
  const linkColor = useColorModeValue("brand.royalMoss", "brand.mint");
  const divider = useColorModeValue(
    "rgba(8, 40, 48, 0.12)",
    "rgba(255, 245, 226, 0.12)"
  );

  const sections: { heading: string; body: React.ReactNode[] }[] = [
    {
      heading: "1. Acceptance of Terms",
      body: [
        "By accessing or using the TIDAL Acupuncture website (the \"Site\"), you agree to be bound by these Terms & Conditions and by our Privacy Policy. If you do not agree with any part of these terms, please discontinue use of the Site.",
      ],
    },
    {
      heading: "2. About This Site",
      body: [
        "TIDAL Acupuncture is an acupuncture and wellness clinic located in Santa Barbara, California. This Site is provided for general informational purposes and to allow prospective and current patients to learn about our services, contact us, and book appointments.",
      ],
    },
    {
      heading: "3. Not Medical Advice",
      body: [
        "The content on this Site — including text, graphics, images, and other material — is for general informational and educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.",
        "Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay seeking it because of something you have read on this Site. No doctor–patient relationship is created by your use of the Site.",
      ],
    },
    {
      heading: "4. Appointments, Cancellations & Payment",
      body: [
        "Appointment requests submitted through the Site or our booking partner are not confirmed until you receive confirmation from us. We reserve the right to reschedule or decline appointments at our discretion.",
        "We kindly ask that you provide at least 24 hours' notice to cancel or reschedule. Late cancellations or missed appointments may be charged the full price of the scheduled service. Fees for services are due at the time of your visit unless otherwise agreed.",
      ],
    },
    {
      heading: "5. Use of the Site",
      body: [
        "You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, the Site by others. You may not attempt to gain unauthorized access to any portion of the Site, interfere with its operation, or use it to transmit harmful or unlawful content.",
      ],
    },
    {
      heading: "6. Intellectual Property",
      body: [
        "All content on this Site, including the TIDAL name, logo, wave and sun/moon marks, text, graphics, and design, is owned by or licensed to TIDAL Acupuncture and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written permission.",
      ],
    },
    {
      heading: "7. Third-Party Links & Services",
      body: [
        "The Site may contain links to third-party websites or services, including our online scheduling and patient portals. These links are provided for convenience only. We do not control and are not responsible for the content, policies, or practices of any third-party sites, and your use of them is governed by their own terms.",
      ],
    },
    {
      heading: "8. Disclaimers",
      body: [
        "The Site and its content are provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.",
      ],
    },
    {
      heading: "9. Limitation of Liability",
      body: [
        "To the fullest extent permitted by law, TIDAL Acupuncture and its owners, practitioners, and staff shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Site. Nothing in these terms limits any liability that cannot be limited under applicable law.",
      ],
    },
    {
      heading: "10. Changes to These Terms",
      body: [
        "We may update these Terms & Conditions from time to time. Any changes will be posted on this page with a revised \"Last updated\" date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms.",
      ],
    },
    {
      heading: "11. Governing Law",
      body: [
        "These Terms & Conditions are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Santa Barbara County, California.",
      ],
    },
  ];

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Terms & Conditions"
        description="The terms that govern your use of our website and services."
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg={bg}
        color={textColor}
        px={[6, 8, 12]}
        py={[16, 20, 24]}
      >
        <Box maxWidth="820px" width="100%">
          <ScrollReveal>
            <Eyebrow color={accent} accentColor={accent}>
              Legal
            </Eyebrow>
            <Text as="p" color={subtleText} fontSize="sm" mb={10}>
              Last updated: {LAST_UPDATED}
            </Text>
          </ScrollReveal>

          <Flex flexDirection="column" gap={[10, 12]}>
            {sections.map((section) => (
              <ScrollReveal key={section.heading}>
                <Box>
                  <Heading as="h2" fontSize={["xl", "2xl"]} mb={4}>
                    {section.heading}
                  </Heading>
                  <Flex flexDirection="column" gap={4}>
                    {section.body.map((paragraph, i) => (
                      <Text
                        key={i}
                        as="p"
                        color={subtleText}
                        fontSize={["md", "lg"]}
                        lineHeight={1.9}
                      >
                        {paragraph}
                      </Text>
                    ))}
                  </Flex>
                </Box>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <Box
                pt={[8, 10]}
                borderTop="1px solid"
                borderColor={divider}
              >
                <Heading as="h2" fontSize={["xl", "2xl"]} mb={4}>
                  12. Contact Us
                </Heading>
                <Text
                  as="p"
                  color={subtleText}
                  fontSize={["md", "lg"]}
                  lineHeight={1.9}
                  mb={4}
                >
                  If you have any questions about these Terms & Conditions,
                  please reach out:
                </Text>
                <Text
                  as="p"
                  color={subtleText}
                  fontSize={["md", "lg"]}
                  lineHeight={1.9}
                >
                  TIDAL Acupuncture
                  <br />
                  1515 State Street, Suite 1B
                  <br />
                  Santa Barbara, CA 93101
                  <br />
                  <Text
                    as={Link}
                    href="tel:+16196337275"
                    color={linkColor}
                    fontWeight="600"
                  >
                    (619) 633-7275
                  </Text>
                  {" · "}
                  <Text
                    as={Link}
                    href="/#contact-us"
                    color={linkColor}
                    fontWeight="600"
                  >
                    Contact form
                  </Text>
                </Text>
              </Box>
            </ScrollReveal>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </PageLayout>
  );
}
