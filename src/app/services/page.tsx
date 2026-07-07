"use client";

import { Navbar } from "@/components/Navbar";
import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ContactUs } from "@/components/sections/ContactUs";
import { ServicesSpotlight } from "@/components/sections/services/ServicesSpotlight";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { getServices } from "@/components/sections/services/getServices";
import { PageLayout } from "@/components/PageLayout";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Page() {
  const textColor = useColorModeValue("brand.royalMoss", "brand.white");
  const subtleText = useColorModeValue("brand.darkWave", "brand.wave");
  const accent = useColorModeValue("brand.gold", "brand.mint");
  const noticeBorder = useColorModeValue(
    "rgba(8, 40, 48, 0.15)",
    "rgba(255, 245, 226, 0.15)"
  );
  const iconMode = useColorModeValue("dark", "light");

  return (
    <PageLayout>
      <Navbar />
      <Hero
        title="Our Services & Pricing"
        description="We offer a wide variety of services, all of which are tailored to YOU."
      />
      <Box
        py={[16, 20, 24]}
        px={[6, 8, 12]}
        maxWidth="1200px"
        position="relative"
        overflowX="hidden"
        width="100%"
      >
        <ScrollReveal>
          <Eyebrow color={accent}>Menu</Eyebrow>
          <Heading as="h2" fontSize={["2xl", "3xl", "4xl"]} color={textColor}>
            All Services & Pricing
          </Heading>
          <Box
            width="60px"
            height="3px"
            borderRadius="full"
            bg={accent}
            mt={5}
          />
        </ScrollReveal>

        <ServicesGrid
          textColor={textColor}
          services={getServices(iconMode)}
          showPrices={true}
        />

        <ScrollReveal>
          <Flex
            mt={[12, 16]}
            p={[6, 8]}
            borderRadius={16}
            border="1px solid"
            borderColor={noticeBorder}
            flexDirection="column"
            gap={3}
          >
            <Eyebrow color={accent} mb={0}>
              Cancellation Notice
            </Eyebrow>
            <Text as="p" color={subtleText} lineHeight={1.8}>
              We kindly ask that you provide at least a 24-hour notice if you
              need to cancel or reschedule your appointment with us. In the
              event of a late cancellation or missed appointment, the full
              charge of the scheduled service will be applied. Thank you for
              your understanding and cooperation. Should you have any questions
              or need to make changes to your appointment, please don't hesitate
              to contact us.
            </Text>
          </Flex>
        </ScrollReveal>
      </Box>
      <ServicesSpotlight />
      <ContactUs />
      <Footer />
    </PageLayout>
  );
}
