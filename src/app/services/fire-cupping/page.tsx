"use client";

import { Navbar } from "@/components/Navbar";
import { useColorModeValue, Flex } from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { PageLayout } from "@/components/PageLayout";
import { FeatureRow } from "@/components/editorial/FeatureRow";

export default function Page() {
  const cardBg = useColorModeValue("brand.wave", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Fire Cupping"
        description="How it works, what to expect, and more!"
      />
      <Flex
        zIndex={1}
        flexDirection="column"
        alignItems="center"
        px={[6, 8, 12]}
        py={[16, 24]}
        bg={cardBg}
        color={textColor}
        width="100%"
      >
        <Flex maxWidth="1200px" width="100%" flexDirection="column">
          <FeatureRow
            eyebrow="How It Works"
            title="How Does Fire Cupping Work? 🔥"
            imageSrc="/media/clinic/herbs.png"
            imageAlt="Traditional Chinese medicine at TIDAL"
            imageSide="left"
            body={[
              "Come experience the healing art of fire cupping therapy. Fire cupping works by creating localized suction on the skin, which increases blood flow, loosens tight muscles, and breaks up scar tissue.",
              "This therapy is beneficial for everyone - from those who suffer from musculoskeletal pain, migraines or muscle tension to those looking to boost their athletic recovery and performance.",
            ]}
          />
        </Flex>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Fire Cupping" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
