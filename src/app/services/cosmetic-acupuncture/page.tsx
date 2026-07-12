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
  const cardBg = useColorModeValue("brand.sand", "brand.royalMoss");
  const textColor = useColorModeValue("brand.royalMoss", "brand.sand");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Cosmetic Acupuncture"
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
        <Flex
          maxWidth="1200px"
          width="100%"
          flexDirection="column"
          gap={[16, 24, 28]}
        >
          <FeatureRow
            eyebrow="How It Works"
            title="How Does Cosmetic Acupuncture Work? 💭"
            imageSrc="/media/clinic/cos-1.png"
            imageAlt="Cosmetic acupuncture at TIDAL"
            imageSide="left"
            body={[
              "Skincare with a zen twist, cosmetic acupuncture is a natural approach to improve skin health and appearance. The insertion of thin needles on the face increases blood flow, enhances collagen production, stimulates lymphatic drainage, and reduces inflammation and redness.",
              "Unlike harsh chemical peels and procedures, cosmetic acupuncture is a gentle and holistic approach that will reduce the appearance of fine lines and wrinkles and rejuvenate dull skin while protecting the skin barrier.",
            ]}
          />

          <FeatureRow
            eyebrow="What To Expect"
            title="Frequency of Treatment ⏳"
            imageSrc="/media/clinic/cos-2.png"
            imageAlt="Facial treatment room at TIDAL"
            imageSide="right"
            body={[
              "While results are noticeable after just a few sessions, we generally recommend twice per week for 5-7 weeks for lasting results.",
              "Everyone's skin, complexion, and medical history is different, so we'll always do our best to keep you informed on our recommendations with your specific case in mind!",
            ]}
          />
        </Flex>
      </Flex>
      <ServicesSpotlight title="Keep Learning 👇🏽" hide="Cosmetic Acupuncture" />
      <ContactUs overrideDarkMode />
      <Footer />
    </PageLayout>
  );
}
